import { Dispatch, SetStateAction } from 'react';
import { Card, GameState } from './types';

export const initializeGame = (): Card[] => {
  const values = Array.from({ length: 8 }, (_, i) => i + 1);
  const cards = [...values, ...values]
    .map((value) => ({ value, isFlipped: false }))
    .sort(() => Math.random() - 0.5);
  return cards;
};

export const handleCardClick = (
  index: number,
  cards: Card[],
  setCards: Dispatch<SetStateAction<Card[]>>,
  setGameState: Dispatch<SetStateAction<GameState>>,
) => {
  const newCards = [...cards];
  newCards[index].isFlipped = !newCards[index].isFlipped;
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
      setTimeout(() => {
        flippedCards[0].isFlipped = false;
        flippedCards[1].isFlipped = false;
        setCards([...newCards]);
      }, 1000);
    }
  }
};
