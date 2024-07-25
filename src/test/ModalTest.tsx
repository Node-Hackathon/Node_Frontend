import { useState } from 'react';
import Modal from '../components/modal/Modal';

export default function ModalTest() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        question1="보호자 정보를"
        question2="입력하시겠습니까?"
        onClickYes={() => {
          console.log('네');
        }}
        onClickNo={() => {
          console.log('아니오');
        }}
      />
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        모달창 열기
      </button>
    </>
  );
}
