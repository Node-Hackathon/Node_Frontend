import React from 'react';
import { Message, ButtonContainer } from './styles';
import { PrimaryButton, SecondaryButton } from '../../../components/button/Button';
import { WonType } from './types';

const Won: React.FC<WonType> = ({ handleNextStage, handleQuit }) => {
  return (
    <>
      <Message type="won">잘하셨습니다! 다 맞추셨어요!</Message>
      <ButtonContainer>
        <SecondaryButton size="m" onClick={handleQuit}>
          그만하기
        </SecondaryButton>
        <PrimaryButton size="m" onClick={handleNextStage}>
          다음 단계로
        </PrimaryButton>
      </ButtonContainer>
    </>
  );
};

export default Won;
