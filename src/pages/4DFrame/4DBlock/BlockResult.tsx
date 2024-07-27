import { PrimaryButton, SecondaryButton } from '../../../components/button/Button';
import { Body2 } from '../../../components/text/Text';
import BlockGraph from './BlockGraph';
import {
  BlockContainer,
  ResultBox,
  ResultButton,
  ResultContainer,
  ResultContent,
  ResultGraphBox,
  ResultImage,
} from './styles';
import { BlockResultType } from './types';

export default function BlockResult({ data, handleReplay, handleNavigate }: BlockResultType) {
  if (!data) {
    alert('분석에 실패했습니다! 다시 시도해주세요.');
    return null;
  }

  const { count, imageUrl, results } = data;

  return (
    <BlockContainer>
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
    </BlockContainer>
  );
}
