import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EventsType } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../../store/reducer/modalSlice';
import { logout } from '../../store/reducer/tokenSlice';
import { RootState } from '../../store/store';

export const useNavEvents = ({ setIsHambergerOpen }: EventsType) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const { isOpen, question1, question2 } = useSelector((state: RootState) => state.modal);

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

  // 로그아웃 클릭 시
  const handleLogout = () => {
    dispatch(
      openModal({
        question1: '정말 로그아웃을',
        question2: '진행하시겠습니까?',
      }),
    );
  };

  const handleModalYes = () => {
    dispatch(closeModal());
    setIsHambergerOpen((prevState) => !prevState);
    dispatch(logout());
    navigate('/', { replace: true });
  };

  const handleModalNo = () => {
    dispatch(closeModal());
  };

  return {
    handleToggleDetails,
    handleGoToCheck,
    handleGoTo4DFrame,
    handleGoToCenter,
    handleGoToMypage,
    handleGoToGame,
    isDetailsOpen,
    handleLogout,
    handleModalYes,
    handleModalNo,
    isOpen,
    question1,
    question2,
  };
};
