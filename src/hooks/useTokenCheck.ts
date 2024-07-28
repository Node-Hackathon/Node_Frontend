import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/reducer/tokenSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';

const useTokenCheck = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const expiryTime = useSelector((state: RootState) => state.token.expiryTime);

  useEffect(() => {
    // 토큰 만료 시간 체크
    const checkTokenExpiry = () => {
      const now = new Date().getTime();

      if (expiryTime && now >= expiryTime) {
        alert('자동 로그아웃되었습니다!');
        dispatch(logout());
        navigate('/signIn', { replace: true });
      }
    };

    checkTokenExpiry();
    const intervalId = setInterval(checkTokenExpiry, 5 * 60 * 1000); // 5분

    return () => clearInterval(intervalId);
  }, [dispatch, expiryTime, navigate]);
};

export default useTokenCheck;
