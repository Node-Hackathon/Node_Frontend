import { LandingBox, LandingContainer, LandingTitle, LandingTouch } from './styles';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';
import { Body3 } from '../../components/text/Text';
import { theme } from '../../styles/theme';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <LandingContainer>
      <Link to="/signIn">
        <LandingBox>
          <LandingTitle>
            <Logo />
            <Body3 color={theme.colors.textNeutral}>매일 조금씩, 더 나은 기억력으로</Body3>
          </LandingTitle>
          <LandingTouch color={theme.colors.textHeavy}> 화면을 누르면 시작합니다!</LandingTouch>
        </LandingBox>
      </Link>
    </LandingContainer>
  );
}
