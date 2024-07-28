import { useState } from 'react';
import { HeaderType } from './types';

export const useToggleHamberger = ({ isHambergerOpen, setIsHambergerOpen }: HeaderType) => {
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

  return { isHambergerOpen, isClosing, handleToggleHamberger };
};
