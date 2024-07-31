import apiSlice from '../apiSlice';
import { myPageReturnType } from './types';

export const myPageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserById: builder.query<myPageReturnType, void>({
      query: () => ({
        url: '/mypage-api/mypage-inquiry',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetUserByIdQuery } = myPageApi;

export default myPageApi;
