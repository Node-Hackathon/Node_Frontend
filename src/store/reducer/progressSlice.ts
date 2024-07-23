import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface progressState {
  currentStep: number;
  prevStep: number;
  isForward: boolean;
  totalSteps: number;
}

const initialState: progressState = {
  currentStep: 1,
  prevStep: 0,
  isForward: true,
  totalSteps: 3,
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    nextStep(state) {
      if (state.currentStep < state.totalSteps) {
        state.prevStep = state.currentStep;
        state.currentStep += 1;
        state.isForward = true;
      }
    },
    prevStep(state) {
      if (state.currentStep > 1) {
        state.prevStep = state.currentStep;
        state.currentStep -= 1;
        state.isForward = false;
      }
    },
    setTotalSteps(state, action: PayloadAction<number>) {
      state.totalSteps = action.payload;
    },
  },
});

export const { nextStep, prevStep, setTotalSteps } = progressSlice.actions;
export default progressSlice.reducer;
