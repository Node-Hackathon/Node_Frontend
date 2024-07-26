import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  accessToken: string | undefined;
}

const initialState: InitialState = {
  accessToken: localStorage.getItem('accessToken') || undefined,
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    login: (state, action) => {
      const { accessToken } = action.payload;
      state.accessToken = accessToken;
      localStorage.setItem('accessToken', accessToken);
    },
    logout: (state) => {
      state.accessToken = undefined;
      localStorage.removeItem('accessToken');
    },
  },
});

export const { login, logout } = tokenSlice.actions;

export default tokenSlice.reducer;
