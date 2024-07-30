import apiSlice from '../apiSlice';
import { DiagnosisReturnType } from './types';

export const diagnosisApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllDiagnoses: builder.query<DiagnosisReturnType[], void>({
      query: () => ({
        url: '/diagnosis-api',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllDiagnosesQuery } = diagnosisApi;

export default diagnosisApi;
