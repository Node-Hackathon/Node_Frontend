import apiSlice from '../apiSlice';

export const signApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: () => ({
        url: '',
        method: 'POST',
      }),
    }),
  }),
});
