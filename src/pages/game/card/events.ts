import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { GameState, Card as CardType } from './types';
import AirplaneGame from '../../../assets/images/AirplaneGame.png';
import AlienGame from '../../../assets/images/AlienGame.png';
import CarGame from '../../../assets/images/CarGame.png';
import FireGame from '../../../assets/images/FireGame.png';
import HeartGame from '../../../assets/images/HeartGame.png';
import LightningGame from '../../../assets/images/LightningGame.png';
import SmileGame from '../../../assets/images/SmileGame.png';
import StarGame from '../../../assets/images/StarGame.png';
import { useCreateCardGameResultMutation } from '../../../services/game/gameApi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GameFormType } from '../../../services/game/types';
import { closeModal, openModal } from '../../../store/reducer/modalSlice';
import { RootState } from '../../../store/store';

const imageList = [
  AirplaneGame,
  AlienGame,
  CarGame,
  FireGame,
  HeartGame,
  LightningGame,
  SmileGame,
  StarGame,
];

export const useCardGame = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isOpen, question1, question2 } = useSelector((state: RootState) => state.modal);

  const [cards, setCards] = useState<CardType[]>([]);
  const [gameState, setGameState] = useState<GameState>('idle');
  const [timeLeft, setTimeLeft] = useState<number>(20);
  const [totalTimeLeft, setTotalTimeLeft] = useState<number>(120);
  const [stage, setStage] = useState<number>(0);

  const [createCardGameResult] = useCreateCardGameResultMutation();

  useEffect(() => {
    console.log('Initializing game state');
    initializeGameState(setCards, setGameState, setTimeLeft, setTotalTimeLeft);
  }, []);

  useEffect(() => {
    if (gameState === 'idle') {
      console.log('Starting idle timer');
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setGameState('playing');
            setCards((cards) => cards.map((card) => ({ ...card, isFlipped: false })));
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [gameState]);

  useEffect(() => {
    if (gameState === 'playing') {
      console.log('Starting playing timer');
      const totalTimer = setInterval(() => {
        setTotalTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(totalTimer);
            setGameState('lost');
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(totalTimer);
    }
  }, [gameState]);

  const initializeGame = (): CardType[] => {
    const cards = [...imageList, ...imageList]
      .map((image) => ({ value: image, isFlipped: false, isMatched: false }))
      .sort(() => Math.random() - 0.5);
    return cards;
  };

  const initializeGameState = (
    setCards: Dispatch<SetStateAction<CardType[]>>,
    setGameState: Dispatch<SetStateAction<GameState>>,
    setTimeLeft: Dispatch<SetStateAction<number>>,
    setTotalTimeLeft: Dispatch<SetStateAction<number>>,
    newTimeLeft: number = 20,
    newTotalTimeLeft: number = 120,
  ) => {
    const initializedCards = initializeGame().map((card) => ({ ...card, isFlipped: true }));
    setCards(initializedCards);
    setGameState('idle');
    setTimeLeft(newTimeLeft);
    setTotalTimeLeft(newTotalTimeLeft);
  };

  const handleCardClick = (
    index: number,
    cards: CardType[],
    setCards: Dispatch<SetStateAction<CardType[]>>,
    setGameState: Dispatch<SetStateAction<GameState>>,
    gameState: GameState,
  ) => {
    if (gameState !== 'playing') return;

    const newCards = [...cards];

    // 이미 뒤집힌 카드 클릭 방지
    if (newCards[index].isFlipped || newCards[index].isMatched) {
      return;
    }

    newCards[index].isFlipped = true;
    setCards(newCards);

    const flippedCards = newCards.filter((card: CardType) => card.isFlipped && !card.isMatched);
    if (flippedCards.length === 2) {
      if (flippedCards[0].value === flippedCards[1].value) {
        flippedCards[0].isMatched = true;
        flippedCards[1].isMatched = true;
        setCards([...newCards]);

        // 모든 카드가 맞춰졌는지 확인
        if (newCards.every((card) => card.isMatched)) {
          setGameState('won');
        }
      } else {
        // 카드가 뒤집히는 동안 다른 클릭 방지
        setTimeout(() => {
          flippedCards[0].isFlipped = false;
          flippedCards[1].isFlipped = false;
          setCards([...newCards]);
        }, 1000);
      }
    }
  };

  const handleNextStage = (
    setCards: Dispatch<SetStateAction<CardType[]>>,
    setGameState: Dispatch<SetStateAction<GameState>>,
    setTimeLeft: Dispatch<SetStateAction<number>>,
    setTotalTimeLeft: Dispatch<SetStateAction<number>>,
    stage: number,
  ) => {
    const newStage = stage + 1;
    console.log(`Moving to stage: ${newStage}`);

    const newTimeLeft = Math.max(20 - newStage, 1); // 남은 시간 계산, 최소 1초
    console.log(`New timeLeft for stage ${newStage}: ${newTimeLeft}`);

    initializeGameState(setCards, setGameState, setTimeLeft, setTotalTimeLeft, newTimeLeft, 120);
  };

  const onCardClick = (index: number) => {
    console.log('Card clicked:', index);
    handleCardClick(index, cards, setCards, setGameState, gameState);
    if (cards.every((card) => card.isFlipped && card.isMatched)) {
      setGameState('won');
    }
  };

  const handleNextStageClick = () => {
    handleNextStage(setCards, setGameState, setTimeLeft, setTotalTimeLeft, stage);
    setStage((prevStage) => prevStage + 1);
  };

  const handleStageSubmit = async (data: GameFormType) => {
    try {
      await createCardGameResult(data).unwrap();
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

  const handleQuit = () => {
    dispatch(
      openModal({
        question1: '그림 맞추기를 그만두시고',
        question2: '결과를 확인하시겠습니까?',
      }),
    );
  };

  const handleGoResult = async () => {
    const data = {
      stage: stage,
    };
    await handleSubmitAndNavigate(data, 'result');
  };

  const handleModalYes = async () => {
    await dispatch(closeModal());
    const data = {
      stage: stage + 1,
    };
    await handleSubmitAndNavigate(data, 'result');
  };

  const handleModalNo = async () => {
    await dispatch(closeModal());
    const data = {
      stage: stage + 1,
    };
    await handleSubmitAndNavigate(data, -2);
  };

  return {
    initializeGameState,
    handleCardClick,
    handleNextStage,
    stage,
    gameState,
    timeLeft,
    totalTimeLeft,
    cards,
    onCardClick,
    handleNextStageClick,
    handleQuit,
    handleGoResult,
    handleModalYes,
    handleModalNo,
    isOpen,
    question1,
    question2,
  };
};
