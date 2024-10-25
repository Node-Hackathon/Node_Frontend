import { Dispatch, SetStateAction } from 'react';

export interface HeaderType {
  isHambergerOpen: boolean;
  setIsHambergerOpen: Dispatch<SetStateAction<boolean>>;
}
