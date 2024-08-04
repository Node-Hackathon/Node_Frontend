import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface diaryState {
  answers: Record<number, string>;
  expiration: number;
}

const initialState: diaryState = {
  answers: JSON.parse(localStorage.getItem('diaryAnswers') || '{}'),
  expiration: JSON.parse(localStorage.getItem('diaryExpiration') || '0'),
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<{ step: number; answer: string }>) => {
      const { step, answer } = action.payload;
      state.answers[step] = answer;

      const expirationTime = getExpirationTime();
      state.expiration = expirationTime;

      localStorage.setItem('diaryAnswers', JSON.stringify(state.answers));
      localStorage.setItem('diaryExpiration', JSON.stringify(expirationTime));
    },
    resetDiary: (state) => {
      state.answers = {};
      localStorage.removeItem('diaryAnswers');
      localStorage.removeItem('diaryExpiration');
    },
  },
});

export const { setAnswer, resetDiary } = diarySlice.actions;
export default diarySlice.reducer;

// 자정까지 남은 시간을 계산하는 함수
function getExpirationTime() {
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
  return midnight.getTime();
}
