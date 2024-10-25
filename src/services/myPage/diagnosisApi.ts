import apiSlice from '../apiSlice';
import { DiagnosisType } from './types';

export const diagnosisApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDiagnosisById: builder.query<DiagnosisType[], void>({
      query: () => ({
        url: '/survey-api/result-list',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetDiagnosisByIdQuery } = diagnosisApi;

export default diagnosisApi;
