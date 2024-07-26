import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import { useState } from 'react';
import Footer from '../components/footer/Footer';

export default function Home() {
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
