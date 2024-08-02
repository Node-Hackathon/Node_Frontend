import apiSlice from '../apiSlice';
import { BlockGameResult, CardGameResult, CompositionGameResult, NumberGameResult } from './types';

export const gameResultApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlockGameResultById: builder.query<BlockGameResult[], void>({
      query: () => ({
        url: '/4d-api/block-result',
        method: 'GET',
      }),
    }),
    getCompositionGameResultById: builder.query<CompositionGameResult[], void>({
      query: () => ({
        url: '/4d-api/composition-result',
        method: 'GET',
      }),
    }),
    getCardGameResultById: builder.query<CardGameResult[], void>({
      query: () => ({
        url: '/cardgame-api/inquiry-all',
        method: 'GET',
      }),
    }),
    getNumberGameResultById: builder.query<NumberGameResult[], void>({
      query: () => ({
        url: '/numbergame-api/inquiry-all',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetCardGameResultByIdQuery,
  useGetNumberGameResultByIdQuery,
  useGetBlockGameResultByIdQuery,
  useGetCompositionGameResultByIdQuery,
} = gameResultApi;

export default gameResultApi;
