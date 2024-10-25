import apiSlice from '../apiSlice';
import { SurveyType } from './types';

export const surveyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createSurvey: builder.mutation({
      query: (data: SurveyType) => ({
        url: '/survey-api/result',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useCreateSurveyMutation } = surveyApi;

export default surveyApi;
