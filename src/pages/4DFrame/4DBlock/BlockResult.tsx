import { PrimaryButton, SecondaryButton } from '../../../components/button/Button';
import { Body2 } from '../../../components/text/Text';
import { ResultImage } from '../styles';
import BlockGraph from './BlockGraph';
import { ResultBox, ResultButton, ResultContainer, ResultContent, ResultGraphBox } from './styles';
import { BlockResultType } from './types';

export default function BlockResult({ data, handleReplay, handleNavigate }: BlockResultType) {
  if (data === null) {
    return null;
  }

  const { count, imageUrl, results } = data;

  return (
    <ResultContainer>
      <ResultBox>
        <ResultContent>
          <ResultImage src={imageUrl} />
          <Body2>총 {count}개의 유형이 쓰였어요!</Body2>
        </ResultContent>
        <ResultGraphBox>
          {results.map(({ name, accuracy }) => (
            <BlockGraph key={name} name={name} accuracy={accuracy} />
          ))}
        </ResultGraphBox>
      </ResultBox>
      <ResultButton>
        <SecondaryButton size="m" onClick={handleReplay}>
          다시하기
        </SecondaryButton>
        <PrimaryButton size="m" onClick={handleNavigate}>
          누적 결과 보기
        </PrimaryButton>
      </ResultButton>
    </ResultContainer>
  );
}
