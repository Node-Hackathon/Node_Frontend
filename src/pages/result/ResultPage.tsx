import { PrimaryButton, SecondaryButton } from '../../components/button/Button';
import { Title3 } from '../../components/text/Text';
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

export default function ResultPage() {
  return (
    <ResultContainer>
      <ResultBox>
        <ResultTitle>
          <Title3>민욱님의</Title3>
          <Title3>카드 뒤집기 결과입니다</Title3>
        </ResultTitle>
        <ResultContent>
          <ResultGraphBox>
            <ResultGraph count={3} date="05.03" />
            <ResultGraph count={6} date="05.03" />
            <ResultGraph count={2} date="05.03" />
            <ResultGraph count={5} date="05.03" />
            <ResultGraph count={10} date="05.03" />
          </ResultGraphBox>
          <ResultText>저번 게임과 동일한 점수를 기록했어요</ResultText>
        </ResultContent>
        <ResultButton>
          <SecondaryButton size="m" onClick={() => {}}>
            다시하기
          </SecondaryButton>
          <PrimaryButton size="m" onClick={() => {}}>
            누적 결과 보기
          </PrimaryButton>
        </ResultButton>
      </ResultBox>
    </ResultContainer>
  );
}
