import apiSlice from '../apiSlice';
import { BlockReturnType, CompositionReturnType } from './types';

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
  }),
});

export const { useBlockPlayMutation, useCompositionPlayMutation } = fdApi;

export default fdApi;
