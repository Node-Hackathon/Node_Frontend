import apiSlice from '../apiSlice';
import { GuardianFormType } from '../sign/types';

export const guardianApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGuardianInfoById: builder.query<GuardianFormType, void>({
      query: () => ({
        url: '/mypage-api/guardianpage-inquiry',
        method: 'GET',
      }),
    }),
    updateGuardianInfo: builder.mutation({
      query: (data: GuardianFormType) => ({
        url: '/mypage-api/guardian-update',
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const { useGetGuardianInfoByIdQuery, useUpdateGuardianInfoMutation } = guardianApi;

export default guardianApi;
