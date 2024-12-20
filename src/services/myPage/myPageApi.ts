import apiSlice from '../apiSlice';
import { myPageReturnType } from './types';

export const myPageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // 유저 정보 조회
    getUserById: builder.query<myPageReturnType, void>({
      query: () => ({
        url: '/mypage-api/mypage-inquiry',
        method: 'GET',
        providesTags: ['User'],
      }),
    }),
    // 유저 정보 수정
    updateUser: builder.mutation<void, Partial<myPageReturnType>>({
      query: (data) => ({
        url: '/mypage-api/mypage-update',
        method: 'PUT',
        body: data,
      }),
    }),
    updateImage: builder.mutation({
      query: (data) => ({
        url: '/mypage-api/mypage-update-profile-image',
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const { useGetUserByIdQuery, useUpdateUserMutation, useUpdateImageMutation } = myPageApi;

export default myPageApi;
