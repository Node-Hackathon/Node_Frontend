import {
  NumberBox,
  NumberContainer,
  NumberContent,
  NumberGrid,
  NumberRound,
  NumberLevel,
  NumberTitle,
  NumberButtonPair,
  NumberBeforeBox,
  NumberButton,
  MessageButtonBox,
} from './styles';
import Number from './Number';
import { Body3, Title1, Title4 } from '../../../components/text/Text';
import { theme } from '../../../styles/theme';
import { useNumberGame } from './events';
import { PrimaryButton, SecondaryButton } from '../../../components/button/Button';
import Modal from '../../../components/modal/Modal';

export default function NumberGame() {
  const {
    level,
    grid,
    revealed,
    isCountdownActive,
    countdownTime,
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
  } = useNumberGame();

  return (
    <NumberContainer>
      {start ? (
        <NumberBox>
          <NumberTitle>숫자 맞추기 게임</NumberTitle>
          <NumberContent>
            <NumberRound>
              <NumberLevel>{level}단계</NumberLevel>
              <Body3 color={theme.colors.textPoint}>
                남은 시간 : {gameTimeLeft > 0 ? gameTimeLeft : countdownTime}초
              </Body3>
            </NumberRound>
            <NumberGrid>
              {grid.map((value: number | null, index: number) => (
                <Number
                  key={index}
                  value={value}
                  revealed={revealed[index]}
                  onClick={handleItemClick}
                  index={index}
                  gameStarted={gameStarted}
                />
              ))}
            </NumberGrid>
            <Title4 color={theme.colors.textNeutral}>
              {isCountdownActive &&
                !gameStarted &&
                !isGameOver &&
                !isGameClear &&
                '숫자의 위치를 순서대로 외워주세요!'}
              {!isCountdownActive &&
                gameStarted &&
                !isGameOver &&
                !isGameClear &&
                '숫자의 위치를 순서대로 클릭해주세요!'}
              {isGameOver && (gameTimeLeft < 1 ? '게임 시간 종료!' : '게임 종료!')}
              {isGameClear && '모든 단계 성공!'}
            </Title4>
          </NumberContent>
          <NumberButton>
            {showNextLevelButton && (
              <>
                <MessageButtonBox>
                  <Title4 color={theme.colors.textNeutral}>잘하셨습니다! 다 맞추셨어요!</Title4>
                  <NumberButtonPair>
                    <SecondaryButton size="m" onClick={handleQuit}>
                      그만하기
                    </SecondaryButton>
                    <PrimaryButton size="m" onClick={handleNextLevel}>
                      다음 단계로
                    </PrimaryButton>
                  </NumberButtonPair>
                </MessageButtonBox>
              </>
            )}
            {(isGameOver || isGameClear) && (
              <PrimaryButton size="l" onClick={handleGoResult}>
                결과 보기
              </PrimaryButton>
            )}
          </NumberButton>
        </NumberBox>
      ) : (
        <NumberBeforeBox>
          <Title1>게임을 시작하시겠습니까?</Title1>
          <PrimaryButton size="m" onClick={handleStart}>
            시작하기
          </PrimaryButton>
        </NumberBeforeBox>
      )}
      <Modal
        isOpen={isOpen}
        question1={question1}
        question2={question2}
        onClickNo={handleModalNo}
        onClickYes={handleModalYes}
      />
    </NumberContainer>
  );
}
