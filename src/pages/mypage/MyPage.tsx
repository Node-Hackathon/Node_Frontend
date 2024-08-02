import Modal from '../../components/modal/Modal';
import { useLogout } from '../../hooks/useLogout';
import myPageApi from '../../services/myPage/myPageApi';
import { useMyPageEvents } from './events';
import { Container, Welcome, Text, Category, List, Quit } from './styles';
import { FaUser, FaUsers, FaNoteSticky, FaCubesStacked, FaRightFromBracket } from 'react-icons/fa6';

export default function MyPage() {
  const {
    handleGoToUserInfo,
    handleGoToGuardianInfoPage,
    handleGoToDiagnosisTotalResult,
    handleGoToGameResultPage,
    handleQuit,
    quitIsOpen,
    quitQuestion1,
    quitQuestion2,
    handleQuitYes,
    handleQuitNo,
  } = useMyPageEvents();

  const { handleLogout, handleModalNo, handleModalYes, isOpen, question1, question2 } = useLogout();

  // 유저 정보 조회
  const { data: userData } = myPageApi.useGetUserByIdQuery();

  return (
    <Container>
      <Welcome>
        <Text color="black" fontSize="24px" fontWeight="700" marginLeft="0px">
          {userData?.name}님, 안녕하세요 !
        </Text>
      </Welcome>
      <Category>
        <List onClick={handleGoToUserInfo}>
          <FaUser color="5fcf89" />
          <Text>내 정보</Text>
        </List>
        <List onClick={handleGoToGuardianInfoPage}>
          <FaUsers color="5fcf89" />
          <Text>보호자 정보</Text>
        </List>
        <List onClick={handleGoToDiagnosisTotalResult}>
          <FaNoteSticky color="5fcf89" />
          <Text>진단 결과</Text>
        </List>
        <List onClick={handleGoToGameResultPage}>
          <FaCubesStacked color="5fcf89" />
          <Text>게임 누적 결과</Text>
        </List>
        <List onClick={handleLogout}>
          <FaRightFromBracket color="5fcf89" />
          <Text>로그아웃</Text>
        </List>
      </Category>
      <Quit onClick={handleQuit}>
        <Text color="gray" fontSize="12px" fontWeight="400">
          탈퇴하기
        </Text>
      </Quit>
      <Modal
        isOpen={isOpen}
        question1={question1}
        question2={question2}
        onClickNo={handleModalNo}
        onClickYes={handleModalYes}
      />
      <Modal
        isOpen={quitIsOpen}
        question1={quitQuestion1}
        question2={quitQuestion2}
        onClickNo={handleQuitNo}
        onClickYes={handleQuitYes}
      />
    </Container>
  );
}
