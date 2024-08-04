import { useNavigate } from 'react-router-dom';
import { useSignSecessionMutation } from '../../services/sign/signApi';
import { useDispatch, useSelector } from 'react-redux';
import { quitCloseModal, quitOpenModal, resetModal } from '../../store/reducer/modalSlice';
import { RootState } from '../../store/store';
import { logout } from '../../store/reducer/tokenSlice';
import apiSlice from '../../services/apiSlice';
import { setStepReset } from '../../store/reducer/progressSlice';
import { resetAnswers } from '../../store/reducer/diagnosisSlice';
import { clearUserName } from '../../store/reducer/userSlice';
import { resetDiary } from '../../store/reducer/diarySlice';

export const useMyPageEvents = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { quitIsOpen, quitQuestion1, quitQuestion2 } = useSelector(
    (state: RootState) => state.modal,
  );

  const [signSecession] = useSignSecessionMutation();

  // 내 정보 클릭 시
  const handleGoToUserInfo = () => {
    navigate('./userInfo');
  };

  // 보호자 정보 클릭 시
  const handleGoToGuardianInfoPage = () => {
    navigate('./guardianInfo');
  };

  // 진단 결과 클릭 시
  const handleGoToDiagnosisTotalResult = () => {
    navigate('./totalReslut');
  };

  // 게임 누적 결과 클릭 시
  const handleGoToGameResultPage = () => {
    navigate('./gameResult');
  };

  // 회원 탈퇴 클릭 시
  const handleQuit = () => {
    dispatch(
      quitOpenModal({
        quitQuestion1: '정말 회원 탈퇴를',
        quitQuestion2: '진행하시겠습니까?',
      }),
    );
  };

  const handleQuitYes = async () => {
    dispatch(quitCloseModal());
    try {
      await signSecession({}).unwrap();
      dispatch(resetModal());
      dispatch(setStepReset());
      dispatch(resetAnswers());
      dispatch(clearUserName());
      dispatch(resetDiary());
      dispatch(apiSlice.util.resetApiState());
      await new Promise((resolve) => setTimeout(resolve, 0));
      dispatch(logout());
      navigate('/', { replace: true });
    } catch (err) {
      alert('회원 탈퇴에 실패했습니다.');
      console.log(err);
    }
  };

  const handleQuitNo = () => {
    dispatch(quitCloseModal());
  };

  return {
    handleGoToUserInfo,
    handleGoToGuardianInfoPage,
    handleGoToDiagnosisTotalResult,
    handleGoToGameResultPage,
    handleQuit,
    handleQuitYes,
    handleQuitNo,
    quitIsOpen,
    quitQuestion1,
    quitQuestion2,
  };
};
