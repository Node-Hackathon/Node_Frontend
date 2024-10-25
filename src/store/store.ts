import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../services/apiSlice';
import progressReducer from './reducer/progressSlice';
import modalReducer from './reducer/modalSlice';
import tokenReducer from './reducer/tokenSlice';
import diagnosisReducer from './reducer/diagnosisSlice';
import userReducer from './reducer/userSlice';
import diaryReducer from './reducer/diarySlice';

export const store = configureStore({
  reducer: {
    progress: progressReducer,
    modal: modalReducer,
    token: tokenReducer,
    diagnosis: diagnosisReducer,
    user: userReducer,
    diary: diaryReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    // 다른 슬라이스들도 추가 가능
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
