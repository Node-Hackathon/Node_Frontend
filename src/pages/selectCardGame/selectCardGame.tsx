import React, { useState, useEffect } from 'react';
import { Card as CardType, GameState } from './types';
import { handleCardClick, initializeGameState, handleNextStage } from './events';
import { GameBoard, Card, Stage, GameTitle, Header, CommentMessage } from './styles';
import Logo from '../../assets/images/Logo.png';
import Modal from '../../components/modal/Modal';
import Idle from './idle';
import Playing from './playing';
import Won from './won';
import Lost from './lost';

const SelectCardGame: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [gameState, setGameState] = useState<GameState>('idle');
  const [timeLeft, setTimeLeft] = useState<number>(20);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [totalTimeLeft, setTotalTimeLeft] = useState<number>(120);
  const [stage, setStage] = useState<number>(0);

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

  const handleQuit = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <GameTitle>그림 맞추기 게임</GameTitle>
      <Header>
        <Stage>{stage + 1}단계</Stage>
        {gameState === 'idle' && <Idle timeLeft={timeLeft} />}
        {gameState === 'playing' && <Playing totalTimeLeft={totalTimeLeft} />}
      </Header>
      <GameBoard>
        {cards.map((card, index) => (
          <Card
            key={index}
            className={card.isFlipped ? 'flipped' : ''}
            onClick={() => onCardClick(index)}
          >
            {card.isFlipped ? (
              <img src={card.value} alt="game card" />
            ) : (
              <img src={Logo} alt="card back" className="logo" />
            )}
          </Card>
        ))}
      </GameBoard>
      {gameState === 'idle' && <CommentMessage>그림의 짝을 외우세요!!</CommentMessage>}
      {gameState === 'playing' && <CommentMessage>그림를 선택하세요!</CommentMessage>}
      {gameState === 'won' && (
        <Won handleNextStage={handleNextStageClick} handleQuit={handleQuit} />
      )}
      {gameState === 'lost' && <Lost />}
      <Modal
        isOpen={showModal}
        question1="그림 맞추기를 그만두시고"
        question2="결과를 확인하시겠습니까?"
        onClickNo={handleCloseModal}
        onClickYes={handleCloseModal}
      />
    </>
  );
};

export default SelectCardGame;
