import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  name: string | undefined;
}

const initialState: InitialState = {
  name: localStorage.getItem('name') || undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      const name = action.payload;
      state.name = name;
      localStorage.setItem('name', name);
    },
    clearUserName: (state) => {
      state.name = undefined;
      localStorage.removeItem('name');
    },
  },
});

export const { setUserName, clearUserName } = userSlice.actions;

export default userSlice.reducer;
