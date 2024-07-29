import React, { useState, useEffect } from 'react';
import { Card as CardType, GameState } from './types';
import { handleCardClick, initializeGame } from './events';
import { GameBoard, Card, Message } from './styles';

const SelectCardGame: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [gameState, setGameState] = useState<GameState>('idle');
  const [showTime, setShowTime] = useState(20); // 초기 카드 보여주는 시간
  const [round, setRound] = useState(1); // 현재 라운드
  const [timeLeft, setTimeLeft] = useState(180); // 제한 시간 3분 (180초)
  const [showTimeLeft, setShowTimeLeft] = useState(showTime); // 카드 보여주는 시간 타이머

  const initializeGameState = () => {
    const initializedCards = initializeGame().map((card) => ({ ...card, isFlipped: true }));
    setCards(initializedCards);
    setGameState('idle');
    setRound(1);
    setShowTime(20);
    setTimeLeft(180);
    setShowTimeLeft(20);
  };

  useEffect(() => {
    initializeGameState();
  }, []);

  useEffect(() => {
    if (gameState === 'idle') {
      const showTimer = setInterval(() => {
        setShowTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(showTimer);
            setGameState('playing');
            setCards((cards) => cards.map((card) => ({ ...card, isFlipped: false })));
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(showTimer);
    }
  }, [gameState, round, showTime]);

  useEffect(() => {
    if (gameState === 'playing') {
      const countdown = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            setGameState('lost');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [gameState]);

  useEffect(() => {
    if (cards.every((card) => card.isFlipped && card.isMatched)) {
      setGameState('won');
    }
  }, [cards]);

  const onCardClick = (index: number) => {
    handleCardClick(index, cards, setCards, setGameState);
  };

  const nextRound = () => {
    setRound((prev) => prev + 1);
    setShowTime((prev) => {
      const newShowTime = Math.max(prev - 1, 1); // 최소 1초까지 줄어듦
      setShowTimeLeft(newShowTime);
      return newShowTime;
    });
    setCards(initializeGame().map((card) => ({ ...card, isFlipped: true })));
    setGameState('idle');
    setTimeLeft(180); // 맞추는 시간을 초기화
  };

  return (
    <GameBoard>
      {cards.map((card, index) => (
        <Card
          key={index}
          className={card.isFlipped ? 'flipped' : ''}
          onClick={() => onCardClick(index)}
        >
          {card.isFlipped ? card.value : ''}
        </Card>
      ))}
      {gameState === 'idle' && <Message>카드의 짝을 외우세요!: {showTimeLeft} 초</Message>}
      {gameState === 'won' && (
        <>
          <Message>잘하셨습니다! 다 맞추셨어요!</Message>
          <button onClick={nextRound}>다음으로!</button>
        </>
      )}
      {gameState === 'lost' && (
        <Message>시간&apos;이 다 되었어요ㅠㅠ {round}단계 탈락입니다</Message>
      )}
      {gameState === 'playing' && <Message>{timeLeft}초 남았어요!</Message>}
      <button onClick={initializeGameState}>다시하기</button>
    </GameBoard>
  );
};

export default SelectCardGame;
