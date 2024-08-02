import { createSlice } from '@reduxjs/toolkit';

interface modalState {
  isOpen: boolean;
  question1: string;
  question2: string;
  quitIsOpen: boolean;
  quitQuestion1: string;
  quitQuestion2: string;
}

const initialState: modalState = {
  isOpen: false,
  question1: '',
  question2: '',
  quitIsOpen: false,
  quitQuestion1: '',
  quitQuestion2: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.question1 = action.payload.question1;
      state.question2 = action.payload.question2;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    quitOpenModal: (state, action) => {
      state.quitIsOpen = true;
      state.quitQuestion1 = action.payload.quitQuestion1;
      state.quitQuestion2 = action.payload.quitQuestion2;
    },
    quitCloseModal: (state) => {
      state.quitIsOpen = false;
    },
    resetModal: () => initialState,
  },
});

export const { openModal, closeModal, quitOpenModal, quitCloseModal, resetModal } =
  modalSlice.actions;
export default modalSlice.reducer;
