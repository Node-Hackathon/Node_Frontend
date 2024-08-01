import apiSlice from '../apiSlice';
import { guardianInfoPageRefurnType } from './types';

export const guardianApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGuardianInfoById: builder.query<guardianInfoPageRefurnType, void>({
      query: () => ({
        url: '/mypage-api/guardianpage-inquiry',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetGuardianInfoByIdQuery } = guardianApi;

export default guardianApi;
