import { useState } from 'react';
import { HeaderType } from './types';
import { useNavigate } from 'react-router-dom';

export const useToggleHamberger = ({ isHambergerOpen, setIsHambergerOpen }: HeaderType) => {
  const navigate = useNavigate();
  const [isClosing, setIsClosing] = useState(false);

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

  const handleGoToMain = () => {
    setIsHambergerOpen(false);
    navigate('/main');
  };

  return { isHambergerOpen, isClosing, handleToggleHamberger, handleGoToMain };
};
