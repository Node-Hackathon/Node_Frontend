import { GameState } from './types';
import React from 'react';

export const generateRandomNumbers = (count: number): number[] => {
  const numbers = [];
  for (let i = 1; i <= count; i++) {
    numbers.push(i);
  }
  return numbers;
};

export const handleNumberClick = (
  num: number,
  index: number,
  gameState: GameState,
  setGameState: React.Dispatch<React.SetStateAction<GameState>>,
) => {
  if (num === gameState.currentIndex + 1) {
    if (num === gameState.numbers.length) {
      setGameState((prevState) => ({
        ...prevState,
        round: prevState.round + 1,
        numbers: [],
        currentIndex: 0,
        positions: [],
      }));
    } else {
      setGameState((prevState) => ({
        ...prevState,
        currentIndex: prevState.currentIndex + 1,
      }));
    }
  }
};
