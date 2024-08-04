import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  accessToken: string | undefined;
  expiryTime: number | undefined;
}

const initialState: InitialState = {
  accessToken: localStorage.getItem('accessToken') || undefined,
  expiryTime: localStorage.getItem('expiryTime')
    ? parseInt(localStorage.getItem('expiryTime')!, 10)
    : undefined,
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    login: (state, action) => {
      const { accessToken } = action.payload;
      const expiresIn = 60 * 60 * 1000;
      const expiryTime = new Date().getTime() + expiresIn;
      state.accessToken = accessToken;
      state.expiryTime = expiryTime;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('expiryTime', expiryTime.toString());
    },
    logout: (state) => {
      state.accessToken = undefined;
      state.expiryTime = undefined;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('expiryTime');
      localStorage.removeItem('checkedValues');
      localStorage.removeItem('name');
      localStorage.removeItem('diaryAnswers');
      localStorage.removeItem('diaryExpiration');
    },
  },
});

export const { login, logout } = tokenSlice.actions;

export default tokenSlice.reducer;
