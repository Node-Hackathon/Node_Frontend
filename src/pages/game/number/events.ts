import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeModal, openModal } from '../../../store/reducer/modalSlice';
import { RootState } from '../../../store/store';
import { useCreateNumberGameResultMutation } from '../../../services/game/gameApi';
import { GameFormType } from '../../../services/game/types';

const GRID_SIZE = 25;
const INITIAL_LEVEL = 1;
const MAX_LEVEL = 10;
const NUMBER_COUNT = 3;
const COUNTDOWN_TIME = 15;
const GAME_TIME = 30;

export const useNumberGame = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [level, setLevel] = useState(INITIAL_LEVEL);
  const [grid, setGrid] = useState<(number | null)[]>(Array(GRID_SIZE).fill(null));
  const [revealed, setRevealed] = useState<boolean[]>(Array(GRID_SIZE).fill(true));
  const [countdownTime, setCountdownTime] = useState(COUNTDOWN_TIME);
  const [gameTimeLeft, setGameTimeLeft] = useState(GAME_TIME);
  const [start, setStart] = useState(false);
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [correctSequence, setCorrectSequence] = useState<number[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameClear, setIsGameClear] = useState(false);
  const [showNextLevelButton, setShowNextLevelButton] = useState(false);

  const { isOpen, question1, question2 } = useSelector((state: RootState) => state.modal);

  const [createNumberGameResult] = useCreateNumberGameResultMutation();

  useEffect(() => {
    startGame();
  }, [level]);

  useEffect(() => {
    if (isCountdownActive) {
      const timer = setInterval(() => {
        setCountdownTime((prevCountdownTime) => {
          if (prevCountdownTime <= 1) {
            clearInterval(timer);
            handleCountdownEnd();
            return 0;
          }
          return prevCountdownTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isCountdownActive]);

  useEffect(() => {
    if (gameStarted && !isGameOver && !isGameClear) {
      const gameTimer = setInterval(() => {
        setGameTimeLeft((prevGameTimeLeft) => {
          if (prevGameTimeLeft <= 1) {
            clearInterval(gameTimer);
            setIsGameOver(true);
            return 0;
          }
          return prevGameTimeLeft - 1;
        });
      }, 1000);

      return () => clearInterval(gameTimer);
    }
  }, [gameStarted, isGameOver, isGameClear]);

  const startGame = useCallback(() => {
    const newGrid = Array(GRID_SIZE).fill(null);
    const numberCount = NUMBER_COUNT + (level - 1);
    const numbers = Array.from({ length: numberCount }, (_, i) => (i % numberCount) + 1);
    const indices = getRandomIndices(numberCount);

    indices.forEach((index, i) => {
      newGrid[index] = numbers[i];
    });

    setGrid(newGrid);
    setRevealed(Array(GRID_SIZE).fill(true));
    setCountdownTime(COUNTDOWN_TIME);
    setGameTimeLeft(0);
    setIsCountdownActive(true);
    setGameStarted(false);
    setIsGameOver(false);
    setIsGameClear(false);
    setShowNextLevelButton(false);
    setCorrectSequence(indices.map((index) => newGrid[index]!));
  }, [level]);

  const getRandomIndices = useCallback((count: number) => {
    const indices = Array.from(Array(GRID_SIZE).keys());

    for (let i = indices.length - 1; i > indices.length - count - 1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    return indices.slice(-count);
  }, []);

  const handleItemClick = useCallback(
    (index: number) => {
      if (isGameOver || revealed[index] || !gameStarted) return;

      const clickedNumber = grid[index];

      if (clickedNumber !== null) {
        const newSequence = [...correctSequence];

        if (clickedNumber === newSequence[0]) {
          newSequence.shift();
          setCorrectSequence(newSequence);

          if (newSequence.length === 0) {
            setGameStarted(false);
            if (level >= MAX_LEVEL) {
              setIsGameClear(true);
            } else {
              setShowNextLevelButton(true);
            }
          }
        } else {
          setIsGameOver(true);
        }
      }

      setRevealed((prevRevealed) => {
        const newRevealed = [...prevRevealed];
        newRevealed[index] = true;
        return newRevealed;
      });
    },
    [grid, revealed, correctSequence, isGameOver, gameStarted, level],
  );

  const handleCountdownEnd = useCallback(() => {
    setRevealed(revealed.map((_, index) => grid[index] === null));
    setGameTimeLeft(GAME_TIME);
    setIsCountdownActive(false);
    setGameStarted(true);
  }, [revealed, grid]);

  const handleStageSubmit = async (data: GameFormType) => {
    try {
      await createNumberGameResult(data).unwrap();
      return true;
    } catch (error) {
      console.error(error);
      alert('결과 전송에 실패했습니다.');
      return false;
    }
  };

  const handleSubmitAndNavigate = async (data: GameFormType, path: string | number) => {
    const success = await handleStageSubmit(data);
    if (success) {
      if (typeof path === 'string') {
        navigate(path);
      } else {
        navigate(path);
      }
    }
  };

  const handleStart = () => setStart(true);

  const handleQuit = () => {
    dispatch(
      openModal({
        question1: '게임을 종료하고',
        question2: '결과를 확인하시겠습니까?',
      }),
    );
  };

  const handleNextLevel = useCallback(() => {
    if (level < MAX_LEVEL) {
      setLevel((prevLevel) => prevLevel + 1);
    }
  }, [level]);

  const handleGoResult = async () => {
    const data = {
      stage: isGameClear ? level : level - 1,
    };
    await handleSubmitAndNavigate(data, 'result');
  };

  const handleModalYes = async () => {
    dispatch(closeModal());
    const data = {
      stage: level,
    };
    await handleSubmitAndNavigate(data, 'result');
  };

  const handleModalNo = async () => {
    dispatch(closeModal());
    const data = {
      stage: level,
    };
    await handleSubmitAndNavigate(data, -1);
  };

  return {
    level,
    grid,
    revealed,
    countdownTime,
    isCountdownActive,
    gameStarted,
    gameTimeLeft,
    start,
    handleItemClick,
    handleStart,
    isGameOver,
    isGameClear,
    showNextLevelButton,
    handleNextLevel,
    handleGoResult,
    handleQuit,
    handleModalYes,
    handleModalNo,
    isOpen,
    question1,
    question2,
  };
};
