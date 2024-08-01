import apiSlice from '../apiSlice';
import { GameReturnType, GameFormType, GameCompareReturnType } from './types';

export const gameApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createNumberGameResult: builder.mutation({
      query: (data: GameFormType) => ({
        url: '/numbergame-api/update',
        method: 'POST',
        body: data,
      }),
    }),
    getRecentNumberGameResults: builder.query<GameReturnType[], void>({
      query: () => ({
        url: '/numbergame-api/inquiry-five',
        method: 'GET',
      }),
    }),
    compareNumberGameResult: builder.query<GameCompareReturnType, void>({
      query: () => ({
        url: '/numbergame-api/compare',
        method: 'GET',
      }),
    }),
    createCardGameResult: builder.mutation({
      query: (data: GameFormType) => ({
        url: '/cardgame-api/update',
        method: 'POST',
        body: data,
      }),
    }),
    getRecentCardGameResults: builder.query<GameReturnType[], void>({
      query: () => ({
        url: '/cardgame-api/inquiry-five',
        method: 'GET',
      }),
    }),
    compareCardGameResult: builder.query<GameCompareReturnType, void>({
      query: () => ({
        url: '/cardgame-api/compare',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCreateNumberGameResultMutation,
  useGetRecentNumberGameResultsQuery,
  useCompareNumberGameResultQuery,
  useCreateCardGameResultMutation,
  useGetRecentCardGameResultsQuery,
  useCompareCardGameResultQuery,
} = gameApi;

export default gameApi;
