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
  }, [accessToken, dispatch]);

  // true -> Nav Open
  // false -> Nav Close
  const [isHambergerOpen, setIsHambergerOpen] = useState(false);
  const [$isClosing, setIsClosing] = useState(false);

  // toggle
  const handleToggleHamberger = () => {
    if (isHambergerOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsHambergerOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsHambergerOpen(true);
    }
  };

  return (
    <>
      <Header isHambergerOpen={isHambergerOpen} handleToggleHamberger={handleToggleHamberger} />
      <Outlet context={{ isHambergerOpen, $isClosing }} />
      <Footer />
    </>
  );
}
