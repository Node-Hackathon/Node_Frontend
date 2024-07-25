export interface ModalType {
  isOpen: boolean;
  question1: string;
  question2: string;
  onClickYes: () => void;
  onClickNo: () => void;
}
