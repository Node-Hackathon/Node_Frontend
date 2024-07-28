import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/header/Header';
import { useEffect, useState } from 'react';
import Footer from '../components/footer/Footer';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import { logout } from '../store/reducer/tokenSlice';

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((state: RootState) => state.token.accessToken);

  useEffect(() => {
    if (!accessToken) {
      dispatch(logout());
      alert('자동 로그아웃되었습니다!');
      navigate('/signIn');
    }
  }, [accessToken, dispatch, navigate]);

  // true -> Nav Open
  // false -> Nav Close
  const [isHambergerOpen, setIsHambergerOpen] = useState(false);

  return (
    <>
      <Header isHambergerOpen={isHambergerOpen} setIsHambergerOpen={setIsHambergerOpen} />
      {!isHambergerOpen && <Outlet />}
      <Footer />
    </>
  );
}
