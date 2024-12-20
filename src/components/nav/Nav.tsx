import { NavContainer, NavDetails, NavSummary, NavList, NavContent, StateBtn } from './styles';
import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';
import { NavType } from './types';
import { useNavEvents } from './events';
import Modal from '../modal/Modal';
import { useLogout } from '../../hooks/useLogout';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function Nav({ isClosing, setIsHambergerOpen }: NavType) {
  const {
    handleToggle4dDetails,
    handleToggleDiaryDetails,
    handleGoToCheck,
    handleGoToDiary,
    handleGoToDiaryResult,
    handleGoTo4DFrame,
    handleGoToGame,
    handleGoToCenter,
    handleGoToMypage,
    is4dDetailsOpen,
    isDiaryDetailsOpen,
    handleLogin,
  } = useNavEvents({
    setIsHambergerOpen,
  });

  const { handleLogout, handleModalNo, handleModalYes, isOpen, question1, question2 } = useLogout();

  const accessToken = useSelector((state: RootState) => state.token.accessToken);

  return (
    <NavContainer $isClosing={isClosing}>
      <NavContent onClick={handleGoToCheck}>치매 진단</NavContent>
      <NavDetails onClick={handleToggle4dDetails}>
        <NavSummary>
          교육
          {!is4dDetailsOpen && <FaAngleDown />}
          {is4dDetailsOpen && <FaAngleUp />}
        </NavSummary>
        <NavList onClick={handleGoTo4DFrame}>포디프레임</NavList>
        <NavList onClick={handleGoToGame}>게임</NavList>
      </NavDetails>
      <NavDetails onClick={handleToggleDiaryDetails}>
        <NavSummary>
          일기
          {!isDiaryDetailsOpen && <FaAngleDown />}
          {isDiaryDetailsOpen && <FaAngleUp />}
        </NavSummary>
        <NavList onClick={handleGoToDiary}>일기 쓰기</NavList>
        <NavList onClick={handleGoToDiaryResult}>일기 보기</NavList>
      </NavDetails>
      <NavContent onClick={handleGoToCenter}>상담 센터</NavContent>
      <NavContent onClick={handleGoToMypage}>마이페이지</NavContent>
      <StateBtn onClick={accessToken ? handleLogout : handleLogin}>
        {accessToken ? '로그아웃' : '로그인'}
      </StateBtn>
      <Modal
        isOpen={isOpen}
        question1={question1}
        question2={question2}
        onClickNo={handleModalNo}
        onClickYes={handleModalYes}
      />
    </NavContainer>
  );
}

export default Nav;
