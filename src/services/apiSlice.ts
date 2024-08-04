import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store';
import { logout } from '../store/reducer/tokenSlice';
import { setStepReset } from '../store/reducer/progressSlice';
import { resetAnswers } from '../store/reducer/diagnosisSlice';
import { clearUserName } from '../store/reducer/userSlice';
import { resetDiary } from '../store/reducer/diarySlice';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).token.accessToken;
    if (token) {
      headers.set('X-AUTH-TOKEN', token);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOption,
) => {
  let result = await baseQuery(args, api, extraOption);

  if (result.error && result.error.status === 401) {
    alert('로그인 후 다시 시도해주세요!');
    api.dispatch(logout());
    api.dispatch(setStepReset());
    api.dispatch(resetAnswers());
    api.dispatch(clearUserName());
    api.dispatch(resetDiary());
    api.dispatch(apiSlice.util.resetApiState());
  }

  return result;
};

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: ['Guardian', 'Diary'],
});

export default apiSlice;
