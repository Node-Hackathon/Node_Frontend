import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DiagnosisState {
  answers: Record<number, number>;
  checkedValues: Record<number, number>;
}

const initialState: DiagnosisState = {
  answers: {},
  checkedValues: {},
};

const diagnosisSlice = createSlice({
  name: 'diagnosis',
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<{ step: number; answer: number }>) => {
      const { step, answer } = action.payload;
      state.answers[step] = answer;
    },
    setCheckedValue: (state, action: PayloadAction<{ step: number; value: number }>) => {
      const { step, value } = action.payload;
      state.checkedValues[step] = value;
    },
    resetAnswers: (state) => {
      state.answers = {};
      state.checkedValues = {};
      localStorage.removeItem('checkedValues');
      localStorage.removeItem('answers');
    },
  },
});

export const { setAnswer, setCheckedValue, resetAnswers } = diagnosisSlice.actions;
export default diagnosisSlice.reducer;
