import { useSelector } from 'react-redux';
import { PrimaryButton, SecondaryButton } from '../../components/button/Button';
import { Title3 } from '../../components/text/Text';
import { GameReturnType } from '../../services/game/types';
import { formatDate, useResult } from './events';
import ResultGraph from './ResultGraph';
import {
  ResultButton,
  ResultContainer,
  ResultBox,
  ResultContent,
  ResultGraphBox,
  ResultTitle,
  ResultText,
} from './styles';
import { ResultType } from './types';
import { RootState } from '../../store/store';

export default function ResultPage({ game, graphData, messageData }: ResultType) {
  const { handleReplay, handleGoResult } = useResult();

  const name = useSelector((state: RootState) => state.user.name);

  return (
    <ResultContainer>
      <ResultBox>
        <ResultTitle>
          <Title3>{name}님의</Title3>
          <Title3>{game} 결과입니다</Title3>
        </ResultTitle>
        <ResultContent>
          <ResultGraphBox>
            {graphData
              .slice()
              .reverse()
              .map((result: GameReturnType, index) => (
                <ResultGraph
                  key={result.id}
                  count={result.stage}
                  date={formatDate(result.date)}
                  isToday={index === graphData.length - 1}
                />
              ))}
          </ResultGraphBox>
          <ResultText>{messageData.message}</ResultText>
        </ResultContent>
        <ResultButton>
          <SecondaryButton size="m" onClick={handleReplay}>
            다시하기
          </SecondaryButton>
          <PrimaryButton size="m" onClick={handleGoResult}>
            누적 결과 보기
          </PrimaryButton>
        </ResultButton>
      </ResultBox>
    </ResultContainer>
  );
}
