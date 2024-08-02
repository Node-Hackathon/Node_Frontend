import { useEffect } from 'react';
import { Result } from '../../components/result/Result';
import {
  useGetBlockGameResultByIdQuery,
  useGetCardGameResultByIdQuery,
  useGetCompositionGameResultByIdQuery,
  useGetNumberGameResultByIdQuery,
} from '../../services/myPage/gameResultApi';
import { Container } from './styles';

export default function GameResultPage() {
  const { data: CardGameResultData, refetch } = useGetCardGameResultByIdQuery();
  const { data: NumberGameResultData } = useGetNumberGameResultByIdQuery();
  const { data: BlockGameResultData } = useGetBlockGameResultByIdQuery();
  const { data: CompositionGameResultData } = useGetCompositionGameResultByIdQuery();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Container>
      {/* 블록쌓기 게임 */}
      <Result GameResult={BlockGameResultData || []} slice={'slice'} gameType={'블록 쌓기'} />
      {/* 구성놀이 게임 */}
      <Result GameResult={CompositionGameResultData || []} slice={'slice'} gameType={'구성 놀이'} />
      {/* 카드 뒤집기 게임 */}
      <Result GameResult={CardGameResultData || []} slice={'slice'} gameType={'카드 뒤집기'} />
      {/* 숫자 맞추기 게임 */}
      <Result GameResult={NumberGameResultData || []} slice={'slice'} gameType={'숫자 맞추기'} />
    </Container>
  );
}
