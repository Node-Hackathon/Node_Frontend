import ReactModal from 'react-modal';
import { ModalButton, ModalContainer, modalCustomStyles, ModalTitle } from './styles';
import { ModalType } from './types';
import { Title3 } from '../text/Text';
import { PrimaryButton, SecondaryButton } from '../button/Button';

ReactModal.setAppElement('#root');

export default function Modal({ isOpen, question1, question2, onClickNo, onClickYes }: ModalType) {
  return (
    <ReactModal isOpen={isOpen} style={modalCustomStyles}>
      <ModalContainer>
        <ModalTitle>
          <Title3>{question1}</Title3>
          <Title3>{question2}</Title3>
        </ModalTitle>
        <ModalButton>
          <SecondaryButton size="s" onClick={onClickNo}>
            아니오
          </SecondaryButton>
          <PrimaryButton size="s" onClick={onClickYes}>
            네
          </PrimaryButton>
        </ModalButton>
      </ModalContainer>
    </ReactModal>
  );
}
