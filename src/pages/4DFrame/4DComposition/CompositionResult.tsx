import { PrimaryButton, SecondaryButton } from '../../../components/button/Button';
import { Body2 } from '../../../components/text/Text';
import { theme } from '../../../styles/theme';
import { FDBox, FDContainer, FDContent, FDManual, FDTitle, ResultImage } from '../styles';
import { ResultBox, ResultButton } from './styles';
import { CompositionResultType } from './type';

export default function CompositionResult({
  data,
  handleReplay,
  handleNavigate,
}: CompositionResultType) {
  if (data === null) {
    return null;
  }

  const { image_url } = data;

  return (
    <FDContainer>
      <FDBox>
        <FDManual>
          <a href={image_url} download>
            <PrimaryButton size="xs">사진 저장하기</PrimaryButton>
          </a>
        </FDManual>
        <ResultBox>
          <FDContent>
            <FDTitle />
            <ResultImage src={image_url} />
            <Body2 color={theme.colors.textNeutral}>사진 처리가 완료되었어요!</Body2>
          </FDContent>
        </ResultBox>
        <ResultButton>
          <SecondaryButton size="m" onClick={handleReplay}>
            다시하기
          </SecondaryButton>
          <PrimaryButton size="m" onClick={handleNavigate}>
            누적 결과 보기
          </PrimaryButton>
        </ResultButton>
      </FDBox>
    </FDContainer>
  );
}
