import { LandingBox, LandingContainer, LandingTitle } from './styles';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';
import { Body2, Body3 } from '../../components/text/Text';
import { theme } from '../../styles/theme';

export default function LandingPage() {
  return (
    <LandingContainer>
      <LandingBox>
        <LandingTitle>
          <Logo />
          <Body3 color={theme.colors.textNeutral}>매일 조금씩, 더 나은 기억력으로</Body3>
        </LandingTitle>
        <Body2 color={theme.colors.textHeavy}> 화면을 누르면 시작합니다!</Body2>
      </LandingBox>
    </LandingContainer>
  );
}
