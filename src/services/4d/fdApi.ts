import apiSlice from '../apiSlice';
import { BlockReturnType } from './types';

export const fdApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    BlockPlay: builder.mutation<BlockReturnType, FormData>({
      query: (data) => ({
        url: '/4d-api/block',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useBlockPlayMutation } = fdApi;

export default fdApi;
