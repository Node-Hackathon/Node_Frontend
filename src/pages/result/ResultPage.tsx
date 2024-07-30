import { PrimaryButton, SecondaryButton } from '../../components/button/Button';
import { Title3 } from '../../components/text/Text';
import { ResultBox } from '../4DFrame/4DBlock/styles';
import { ResultButton, ResultContainer, ResultContent, ResultTitle } from './styles';

export default function ResultPage() {
  return (
    <ResultContainer>
      <ResultBox>
        <ResultTitle>
          <Title3>민욱님의</Title3>
          <Title3>카드 뒤집기 결과입니다</Title3>
        </ResultTitle>
        <ResultContent></ResultContent>
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
