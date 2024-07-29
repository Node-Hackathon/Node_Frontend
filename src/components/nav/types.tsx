import { Dispatch, SetStateAction } from 'react';

export interface NavType {
  isClosing: boolean;
  setIsHambergerOpen: Dispatch<SetStateAction<boolean>>;
}

export interface EventsType {
  setIsHambergerOpen: Dispatch<SetStateAction<boolean>>;
}
