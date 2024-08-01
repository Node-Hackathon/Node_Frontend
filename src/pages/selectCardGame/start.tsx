import React from 'react';
import { PrimaryButton } from '../../components/button/Button';
import { ButtonContainer, CenteredContainer, Message } from './styles';
import { Link } from 'react-router-dom';

const StartGame: React.FC = () => {
  return (
    <CenteredContainer>
      <Message>게임을 시작하시겠습니까?</Message>
      <ButtonContainer>
        <PrimaryButton size="m">
          <Link to={'/game/selectCardGame'}>시작하기</Link>
        </PrimaryButton>
      </ButtonContainer>
    </CenteredContainer>
  );
};

export default StartGame;
