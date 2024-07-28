import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const [isHambergerOpen, setIsHambergerOpen] = useState(false);

  return (
    <>
      <Header isHambergerOpen={isHambergerOpen} setIsHambergerOpen={setIsHambergerOpen} />
      {!isHambergerOpen && <Outlet />}
      <Footer />
    </>
  );
}
