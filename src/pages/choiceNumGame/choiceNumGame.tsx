import React, { useState, useEffect } from 'react';
import { generateRandomNumbers, handleNumberClick } from './events';
import { GameContainer, NumberButton, InfoContainer } from './styles';
import { GameState } from './types';

const MAX_ROUNDS = 14;

const ChoiceNumGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    round: 1,
    numbers: [],
    currentIndex: 0,
    positions: [],
    isGameOver: false,
    finalScore: 0,
  });

  useEffect(() => {
    const generateRandomPositions = (count: number) => {
      const positions = new Set<string>();
      while (positions.size < count) {
        const position = `${Math.floor(Math.random() * 4)},${Math.floor(Math.random() * 4)}`;
        positions.add(position);
      }
      return Array.from(positions).map((pos) => {
        const [x, y] = pos.split(',').map(Number);
        return { x, y };
      });
    };

    if (gameState.round <= MAX_ROUNDS && !gameState.isGameOver) {
      const numbers = generateRandomNumbers(gameState.round + 2);
      const positions = generateRandomPositions(numbers.length);
      setGameState((prevState) => ({
        ...prevState,
        numbers,
        positions,
      }));
    }
  }, [gameState.round, gameState.isGameOver]);

  const handleNumberClickWrapper = (num: number, index: number) => {
    if (gameState.isGameOver) return;

    const expectedValue = gameState.currentIndex + 1; // 예상 값 정의

    // 잘못된 버튼 클릭 감지 로직
    if (num !== expectedValue) {
      setGameState((prevState) => ({
        ...prevState,
        isGameOver: true,
        finalScore: calculateScore(prevState),
      }));
      return;
    }

    if (gameState.round <= MAX_ROUNDS) {
      handleNumberClick(num, index, gameState, setGameState);
    }
  };

  const calculateScore = (state: GameState) => {
    // 최종 스코어 계산 로직
    return state.round; // 예시로 라운드 수에 10을 곱한 값을 스코어로 사용
  };

  return (
    <div>
      <InfoContainer>
        <p>현재 라운드: {gameState.round}</p>
        {gameState.round > MAX_ROUNDS && <p>게임 종료! 축하합니다!</p>}
        {gameState.isGameOver && <p>게임 종료! 최종 점수: {gameState.finalScore}단계</p>}
      </InfoContainer>
      <GameContainer>
        {Array.from({ length: 16 }).map((_, index) => {
          const x = Math.floor(index / 4) * 25; // 위치를 퍼센트로 변환
          const y = (index % 4) * 25; // 위치를 퍼센트로 변환
          const numberIndex = gameState.positions.findIndex(
            (pos) => pos.x === x / 25 && pos.y === y / 25,
          );
          const num = numberIndex !== -1 ? gameState.numbers[numberIndex] : null;
          return (
            <NumberButton
              key={index}
              x={x}
              y={y}
              onClick={() => num !== null && handleNumberClickWrapper(num, numberIndex)}
              disabled={gameState.round > MAX_ROUNDS || gameState.isGameOver || num === null}
            >
              {num}
            </NumberButton>
          );
        })}
      </GameContainer>
    </div>
  );
};

export default ChoiceNumGame;
