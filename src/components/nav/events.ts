import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EventsType } from './types';

export const useNavEvents = ({ setIsHambergerOpen }: EventsType) => {
  const navigate = useNavigate();

  const [is4dDetailsOpen, setIs4dDetailsOpen] = useState(false);
  const [isDiaryDetailsOpen, setIsDiaryDetailsOpen] = useState(false);

  // 내비게이션 내의 교육 토글 목록 여닫이
  const handleToggle4dDetails = () => {
    setIs4dDetailsOpen((prevState) => !prevState);
  };

  // 내비게이션 내의 일기 토글 목록 여닫이
  const handleToggleDiaryDetails = () => {
    setIsDiaryDetailsOpen((prevState) => !prevState);
  };

  // "치매 진단" 클릭 시
  const handleGoToCheck = () => {
    setIsHambergerOpen((prevState) => !prevState);
    navigate('/diagnosis');
  };

  // "일기 쓰기" 클릭 시
  const handleGoToDiary = () => {
    setIsHambergerOpen((prevState) => !prevState);
    navigate('/diary');
  };

  // "일기 보기" 클릭 시
  const handleGoToDiaryResult = () => {
    setIsHambergerOpen((prevState) => !prevState);
    navigate('/diaryList');
  };

  // "교육 -> 포디프레임" 클릭 시
  const handleGoTo4DFrame = () => {
    setIsHambergerOpen((prevState) => !prevState);
    navigate('/education/4DFrame');
  };

  // "교육 -> 게임" 클릭 시
  const handleGoToGame = () => {
    setIsHambergerOpen((prevState) => !prevState);
    navigate('/education/game');
  };

  // "치매센터" 클릭 시
  const handleGoToCenter = () => {
    setIsHambergerOpen((prevState) => !prevState);
    navigate('/center');
  };

  // "마이페이지" 클릭 시
  const handleGoToMypage = () => {
    setIsHambergerOpen((prevState) => !prevState);
    navigate('/mypage');
  };

  // '로그인' 클릭 시
  const handleLogin = () => {
    setIsHambergerOpen((prevState) => !prevState);
    navigate('/signIn', { replace: true });
  };

  return {
    handleToggle4dDetails,
    handleToggleDiaryDetails,
    handleGoToCheck,
    handleGoToDiary,
    handleGoToDiaryResult,
    handleGoTo4DFrame,
    handleGoToCenter,
    handleGoToMypage,
    handleGoToGame,
    is4dDetailsOpen,
    isDiaryDetailsOpen,
    handleLogin,
  };
};
