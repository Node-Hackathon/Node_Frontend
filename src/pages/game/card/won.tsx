import React from 'react';
import { Message, ButtonContainer } from './styles';
import { PrimaryButton, SecondaryButton } from '../../../components/button/Button';
import { WonType } from './types';

const Won: React.FC<WonType> = ({ handleNextStage, handleQuit }) => {
  return (
    <>
      <Message type="won">잘하셨습니다! 다 맞추셨어요!</Message>
      <ButtonContainer>
        <PrimaryButton size="m" onClick={handleQuit}>
          그만하기
        </PrimaryButton>
        <SecondaryButton size="m" onClick={handleNextStage}>
          다음 단계로
        </SecondaryButton>
      </ButtonContainer>
    </>
  );
};

export default Won;
