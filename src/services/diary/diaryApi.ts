import apiSlice from '../apiSlice';
import { DiaryFormType, DiaryResultType, DiaryWrittenType } from './types';

export const diaryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    hasWrittenDiaryToday: builder.query<DiaryWrittenType, void>({
      query: () => ({
        url: '/diary-api/has-written-today',
        method: 'GET',
      }),
      providesTags: ['Diary'],
    }),
    createDiary: builder.mutation({
      query: (data: DiaryFormType) => ({
        url: '/diary-api/result',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Diary'],
    }),
    getDiaryResult: builder.query<DiaryResultType[], void>({
      query: () => ({
        url: '/diary-api/result-list',
        method: 'GET',
      }),
    }),
  }),
});

export const { useHasWrittenDiaryTodayQuery, useCreateDiaryMutation, useGetDiaryResultQuery } =
  diaryApi;

export default diaryApi;
