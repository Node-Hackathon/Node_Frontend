import { useOutletContext } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import { MainPageType } from './types';
import { Banner, MainContainer } from './styles';

export default function MainPage() {
  const { isHambergerOpen, $isClosing } = useOutletContext<MainPageType>();
  return (
    <>
      {!isHambergerOpen && (
        <MainContainer>
          <Banner>
            <p>지금 시작하세요</p>
            <p>건강한 두뇌를 위한 첫 걸음</p>
          </Banner>
        </MainContainer>
      )}
      {isHambergerOpen && <Nav $isClosing={$isClosing} />}
    </>
  );
}
