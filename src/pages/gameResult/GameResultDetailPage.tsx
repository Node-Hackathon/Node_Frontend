import { Container } from './styles';
import { Result } from '../../components/result/Result';
import { useLocation } from 'react-router-dom';
import { CardGameResult } from '../../services/myPage/types';
import { NoExistResult } from './NoExistResult';

export default function GameResultDetailPage() {
  const location = useLocation();
  const GameResult = (location.state.GameResult as CardGameResult[]) || null;
  const gameType = location.state.gameType as string;

  if (GameResult.length === 0) {
    return <NoExistResult type={gameType} />;
  }

  return (
    <Container>
      <Result GameResult={GameResult || []} gameType={gameType} />
    </Container>
  );
}
