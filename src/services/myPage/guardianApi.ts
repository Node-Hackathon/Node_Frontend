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
    updateGuardianInfo: builder.mutation<void, Partial<guardianInfoPageRefurnType>>({
      query: (body) => ({
        url: '/mypage-api/guardian-update',
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const { useGetGuardianInfoByIdQuery, useUpdateGuardianInfoMutation } = guardianApi;

export default guardianApi;
