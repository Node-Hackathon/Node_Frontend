import React from 'react';
import { PrimaryButton } from '../../../components/button/Button';
import { CenteredContainer } from './styles';
import { Link } from 'react-router-dom';
import { Title1 } from '../../../components/text/Text';

const StartGame: React.FC = () => {
  return (
    <CenteredContainer>
      <Title1>게임을 시작하시겠습니까?</Title1>
      <PrimaryButton size="m">
        <Link to={'/education/game/card'}>시작하기</Link>
      </PrimaryButton>
    </CenteredContainer>
  );
};

export default StartGame;
