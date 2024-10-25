import Frame from '../../components/frame/Frame';
import { EducationBox, EducationContainer, EducationLink, EducationPair } from './styles';
import { PrimaryButton } from '../../components/button/Button';
import { EducationType } from './type';

export default function EducationPage({
  firstImage,
  firstText,
  firstLink,
  secondImage,
  secondText,
  secondLink,
}: EducationType) {
  return (
    <EducationContainer>
      <EducationBox>
        <EducationPair>
          <Frame src={firstImage} text={firstText} to={firstLink} />
          <Frame src={secondImage} text={secondText} to={secondLink} />
        </EducationPair>
        <EducationLink to="/education/manual">
          <PrimaryButton size="l">설명서 확인하기</PrimaryButton>
        </EducationLink>
      </EducationBox>
    </EducationContainer>
  );
}
