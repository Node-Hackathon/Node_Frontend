import {
  useCompareNumberGameResultQuery,
  useGetRecentNumberGameResultsQuery,
} from '../../services/game/gameApi';
import ResultPage from './ResultPage';

export default function NumberResultPage() {
  const { data: graphData, isSuccess: isGraphSuccess } = useGetRecentNumberGameResultsQuery();
  const { data: messageData, isSuccess: isMessageSuccess } = useCompareNumberGameResultQuery();

  return isGraphSuccess && graphData && isMessageSuccess && messageData ? (
    <ResultPage game="숫자 맞추기" graphData={graphData} messageData={messageData} />
  ) : null;
}
