import apiSlice from '../apiSlice';

export const fdApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    BlockPlay: builder.mutation({
      query: (data: FormData) => ({
        url: '/4d-api/block',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useBlockPlayMutation } = fdApi;

export default fdApi;
