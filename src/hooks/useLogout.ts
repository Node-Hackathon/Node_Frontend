import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../store/reducer/modalSlice';
import { logout } from '../store/reducer/tokenSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isOpen, question1, question2 } = useSelector((state: RootState) => state.modal);

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
    dispatch(logout());
    navigate('/', { replace: true });
  };

  const handleModalNo = () => {
    dispatch(closeModal());
  };

  return { handleLogout, handleModalNo, handleModalYes, isOpen, question1, question2 };
};