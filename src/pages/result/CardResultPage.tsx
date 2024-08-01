import {
  useCompareCardGameResultQuery,
  useGetRecentCardGameResultsQuery,
} from '../../services/game/gameApi';
import ResultPage from './ResultPage';

export default function CardResultPage() {
  const { data: graphData, isSuccess: isGraphSuccess } = useGetRecentCardGameResultsQuery();
  const { data: messageData, isSuccess: isMessageSuccess } = useCompareCardGameResultQuery();

  return isGraphSuccess && graphData && isMessageSuccess && messageData ? (
    <ResultPage game="그림 맞추기" graphData={graphData} messageData={messageData} />
  ) : null;
}
