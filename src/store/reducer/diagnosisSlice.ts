import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DiagnosisState {
  checkedValues: Record<number, number>;
}

const initialState: DiagnosisState = {
  checkedValues: JSON.parse(localStorage.getItem('checkedValues') || '{}'),
};

const diagnosisSlice = createSlice({
  name: 'diagnosis',
  initialState,
  reducers: {
    setCheckedValue: (state, action: PayloadAction<{ step: number; value: number }>) => {
      const { step, value } = action.payload;
      state.checkedValues[step] = value;
      const updatedValues = { ...state.checkedValues, [step]: value };
      localStorage.setItem('checkedValues', JSON.stringify(updatedValues));
    },
    resetAnswers: (state) => {
      state.checkedValues = {};
      localStorage.removeItem('checkedValues');
    },
  },
});

export const { setCheckedValue, resetAnswers } = diagnosisSlice.actions;
export default diagnosisSlice.reducer;
