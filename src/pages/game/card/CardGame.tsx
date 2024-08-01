import React from 'react';
import { useCardGame } from './events';
import {
  GameBoard,
  Card,
  Stage,
  GameTitle,
  Header,
  CommentMessage,
  GameContainer,
  GameResult,
} from './styles';
import Logo from '../../../assets/images/Logo.png';
import Modal from '../../../components/modal/Modal';
import Idle from './idle';
import Playing from './playing';
import Won from './won';
import Lost from './lost';

const CardGame: React.FC = () => {
  const {
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
  } = useCardGame();

  return (
    <GameContainer>
      <GameTitle>그림 맞추기 게임</GameTitle>
      <Header>
        <Stage>{stage + 1}단계</Stage>
        {gameState === 'idle' && <Idle timeLeft={timeLeft} />}
        {gameState === 'playing' && <Playing totalTimeLeft={totalTimeLeft} />}
      </Header>
      <GameBoard>
        {cards.map((card: { isFlipped: boolean; value: string | undefined }, index: number) => (
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
      <GameResult>
        {gameState === 'idle' && <CommentMessage>그림의 짝을 외우세요!!</CommentMessage>}
        {gameState === 'playing' && <CommentMessage>그림을 선택하세요!</CommentMessage>}
        {gameState === 'won' && (
          <Won handleNextStage={handleNextStageClick} handleQuit={handleQuit} />
        )}
        {gameState === 'lost' && <Lost handleGoResult={handleGoResult} />}
      </GameResult>
      <Modal
        isOpen={isOpen}
        question1={question1}
        question2={question2}
        onClickNo={handleModalNo}
        onClickYes={handleModalYes}
      />
    </GameContainer>
  );
};

export default CardGame;
