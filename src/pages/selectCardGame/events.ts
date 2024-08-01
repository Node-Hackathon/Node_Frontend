import { Dispatch, SetStateAction } from 'react';
import { Card, GameState } from './types';
import AirplaneGame from '../../assets/images/AirplaneGame.png';
import AlienGame from '../../assets/images/AlienGame.png';
import CarGame from '../../assets/images/CarGame.png';
import FireGame from '../../assets/images/FireGame.png';
import HeartGame from '../../assets/images/HeartGame.png';
import LightningGame from '../../assets/images/LightningGame.png';
import SmileGame from '../../assets/images/SmileGame.png';
import StarGame from '../../assets/images/StarGame.png';

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

export const initializeGame = (): Card[] => {
  const cards = [...imageList, ...imageList]
    .map((image) => ({ value: image, isFlipped: false, isMatched: false }))
    .sort(() => Math.random() - 0.5);
  return cards;
};

export const initializeGameState = (
  setCards: Dispatch<SetStateAction<Card[]>>,
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

export const handleCardClick = (
  index: number,
  cards: Card[],
  setCards: Dispatch<SetStateAction<Card[]>>,
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

  const flippedCards = newCards.filter((card: Card) => card.isFlipped && !card.isMatched);
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

export const handleNextStage = (
  setCards: Dispatch<SetStateAction<Card[]>>,
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
