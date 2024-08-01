import React from 'react';
import { Message } from './styles';
import { PrimaryButton } from '../../../components/button/Button';
import { LostType } from './types';

const Lost = ({ handleGoResult }: LostType) => {
  return (
    <>
      <Message type="lost">시간이 다 되었습니다. 게임 종료!</Message>
      <PrimaryButton size="l" onClick={handleGoResult}>
        결과 보기
      </PrimaryButton>
    </>
  );
};

export default Lost;
