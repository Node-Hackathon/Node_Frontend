import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import { useState } from 'react';
import Footer from '../components/footer/Footer';
import useTokenCheck from '../hooks/useTokenCheck';
import ScrollToTop from '../hooks/useScrollToTop';

export default function Home() {
  useTokenCheck();

  // true -> Nav Open
  // false -> Nav Close
  const [isHambergerOpen, setIsHambergerOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Header isHambergerOpen={isHambergerOpen} setIsHambergerOpen={setIsHambergerOpen} />
      {!isHambergerOpen && <Outlet />}
      <Footer />
    </>
  );
}
