import apiSlice from '../apiSlice';
import { GameReturnType, GameFormType } from './types';

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
  }),
});

export const { useCreateNumberGameResultMutation, useGetRecentNumberGameResultsQuery } = gameApi;

export default gameApi;
