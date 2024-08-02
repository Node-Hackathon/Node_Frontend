import { Container } from './styles';
import { Result } from '../../components/result/Result';
import { useLocation } from 'react-router-dom';
import { CardGameResult } from '../../services/myPage/types';
// import { useGetCardGameResultByIdQuery } from '../../services/myPage/gameResultApi';

export default function GameResultDetailPage() {
  // const { data: CardGameResultData } = useGetCardGameResultByIdQuery();

  const location = useLocation();
  const GameResult = (location.state.GameResult as CardGameResult[]) || null;
  const gameType = location.state.gameType as string;

  return (
    <Container>
      <Result GameResult={GameResult || []} gameType={gameType} />
    </Container>
  );
}
