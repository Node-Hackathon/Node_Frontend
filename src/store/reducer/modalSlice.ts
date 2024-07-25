import { createSlice } from '@reduxjs/toolkit';

interface modalState {
  isOpen: boolean;
  question1: string;
  question2: string;
}

const initialState: modalState = {
  isOpen: false,
  question1: '',
  question2: '',
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
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
