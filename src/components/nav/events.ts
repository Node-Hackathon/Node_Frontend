import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EventsType } from './types';

export const useNavEvents = ({ setIsHambergerOpen }: EventsType) => {
  const navigate = useNavigate();

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // 내비게이션 내의 토글 목록 여닫이
  const handleToggleDetails = () => {
    setIsDetailsOpen((prevState) => !prevState);
  };

  // "치매 진단" 클릭 시
  const handleGoToCheck = () => {
    setIsHambergerOpen((prevState) => !prevState);
    navigate('/diagnosis');
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

  return {
    handleToggleDetails,
    handleGoToCheck,
    handleGoTo4DFrame,
    handleGoToCenter,
    handleGoToMypage,
    handleGoToGame,
    isDetailsOpen,
  };
};
