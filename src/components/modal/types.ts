import React from 'react';

export interface ModalType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  question1: string;
  question2: string;
  onClickYes: () => void;
  onClickNo: () => void;
}
