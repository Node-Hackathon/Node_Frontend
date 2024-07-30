import { useLocation } from 'react-router-dom';
import { GameResult } from '../../components/result/types';
import { Container } from './styles';
import { Result } from '../../components/result/Result';

export default function GameResultDetailPage() {
  const location = useLocation();

  const gameObj = location.state as GameResult;

  return (
    <Container>
      <Result gameObj={gameObj} />
    </Container>
  );
}
