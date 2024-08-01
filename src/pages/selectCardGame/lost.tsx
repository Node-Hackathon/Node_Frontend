import React from 'react';
import { Message } from './styles';
import { PrimaryButton } from '../../components/button/Button';
import { CenterContainer } from '../center/styles';

const Lost: React.FC = () => {
  const handleShowResults = () => {
    console.log('결과 보기 버튼 클릭됨');
  };

  return (
    <>
      <Message>시간이 다 되었습니다. 게임 종료!</Message>
      <CenterContainer>
        <PrimaryButton size="l" onClick={handleShowResults}>
          결과 보기
        </PrimaryButton>
      </CenterContainer>
    </>
  );
};

export default Lost;
