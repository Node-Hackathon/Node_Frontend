import { useNavigate } from 'react-router-dom';

export const useMyPageEvents = () => {
  const navigate = useNavigate();

  // 내 정보 클릭 시
  const handleGoToUserInfo = () => {
    navigate('./userInfo');
  };

  // 보호자 정보 클릭 시
  const handleGoToGuardianInfoPage = () => {
    navigate('./guardianInfo');
  };

  // 게임 누적 결과 클릭 시
  const handleGoToGameResultPage = () => {
    navigate('./gameResult');
  };

  return { handleGoToUserInfo, handleGoToGuardianInfoPage, handleGoToGameResultPage };
};
