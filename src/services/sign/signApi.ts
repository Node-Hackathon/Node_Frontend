import apiSlice from '../apiSlice';
import { SignUpFirstFormType } from './types';

export const signApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: () => ({
        url: '',
        method: 'POST',
      }),
    }),
    sendMessage: builder.mutation({
      query: (phoneNum: string) => ({
        url: '/sign-api/send-sms',
        method: 'POST',
        params: {
          phone_num: phoneNum,
        },
      }),
    }),
    verifyMessage: builder.mutation({
      query: (number: string) => ({
        url: '/sign-api/sms-verification',
        method: 'POST',
        params: {
          certification_number: number,
        },
      }),
    }),
    firstSignUp: builder.mutation({
      query: (data: SignUpFirstFormType) => ({
        url: '/sign-api/sign-up-first',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useSendMessageMutation, useVerifyMessageMutation, useFirstSignUpMutation } = signApi;

export default signApi;
