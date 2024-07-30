import apiSlice from '../apiSlice';
import {
  BlockReturnType,
  CompositionReturnType,
  RadomCompositionSentenceReturnType,
  RandomBlockSentenceReturnType,
} from './types';

export const fdApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    BlockPlay: builder.mutation<BlockReturnType, FormData>({
      query: (data) => ({
        url: '/4d-api/block',
        method: 'POST',
        body: data,
      }),
    }),
    CompositionPlay: builder.mutation<CompositionReturnType, FormData>({
      query: (data) => ({
        url: '/4d-api/composition',
        method: 'POST',
        body: data,
      }),
    }),
    getRandomBlockSentence: builder.mutation<RandomBlockSentenceReturnType, void>({
      query: () => ({
        url: '/4d-api/block-sentences',
        method: 'POST',
      }),
    }),
    getRandomCompositionSentence: builder.mutation<RadomCompositionSentenceReturnType, void>({
      query: () => ({
        url: '/4d-api/composition-sentences',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useBlockPlayMutation,
  useCompositionPlayMutation,
  useGetRandomBlockSentenceMutation,
  useGetRandomCompositionSentenceMutation,
} = fdApi;

export default fdApi;
