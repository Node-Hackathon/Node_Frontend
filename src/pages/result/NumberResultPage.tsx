import { useGetRecentNumberGameResultsQuery } from '../../services/game/gameApi';
import ResultPage from './ResultPage';

export default function NumberResultPage() {
  const { data, isSuccess } = useGetRecentNumberGameResultsQuery();

  return isSuccess ? <ResultPage game="숫자 맞추기" graphData={data} /> : null;
}
