import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/reducer/tokenSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';
import { useGetUserByIdQuery } from '../services/myPage/myPageApi';
import { clearUserName, setUserName } from '../store/reducer/userSlice';
import apiSlice from '../services/apiSlice';
import { setStepReset } from '../store/reducer/progressSlice';
import { resetAnswers } from '../store/reducer/diagnosisSlice';
import { resetDiary } from '../store/reducer/diarySlice';

const useTokenCheck = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const expiryTime = useSelector((state: RootState) => state.token.expiryTime);
  const accessToken = useSelector((state: RootState) => state.token.accessToken);

  // 사용자 정보를 가져오는 query 훅
  const {
    data: userData,
    isSuccess: isUserSuccess,
    isError: isUserError,
  } = useGetUserByIdQuery(undefined, {
    skip: !accessToken, // 토큰이 없으면 쿼리 요청을 생략
  });

  useEffect(() => {
    // 토큰 만료 시간 체크
    const checkTokenExpiry = () => {
      const now = new Date().getTime();

      if (expiryTime && now >= expiryTime) {
        alert('자동 로그아웃되었습니다!');
        dispatch(logout());
        dispatch(setStepReset());
        dispatch(resetAnswers());
        dispatch(clearUserName());
        dispatch(resetDiary());
        dispatch(apiSlice.util.resetApiState());
        navigate('/signIn', { replace: true });
      }
    };

    checkTokenExpiry();
    const intervalId = setInterval(checkTokenExpiry, 60 * 1000); // 1분

    return () => clearInterval(intervalId);
  }, [dispatch, expiryTime, navigate]);

  useEffect(() => {
    if (isUserSuccess && userData) {
      dispatch(setUserName(userData.name));
    } else if (isUserError) {
      console.error('사용자 정보를 가져오는데 실패했습니다.');
    }
  }, [isUserSuccess, userData, dispatch, isUserError]);
};

export default useTokenCheck;
