import apiSlice from '../apiSlice';
import { CenterReturnType } from './types';

export const centerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCenters: builder.query<CenterReturnType[], void>({
      query: () => ({
        url: '/center-api',
        method: 'GET',
      }),
    }),
    findCentersByRegion: builder.query<CenterReturnType[], string>({
      query: (region) => ({
        url: `/center-api/search?region=${region}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllCentersQuery, useFindCentersByRegionQuery } = centerApi;

export default centerApi;
