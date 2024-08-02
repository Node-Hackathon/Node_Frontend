import apiSlice from '../apiSlice';
import { GuardianFormType, SignInFormType, SignUpFirstFormType } from './types';

export const signApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (data: SignInFormType) => ({
        url: '/sign-api/sign-in',
        method: 'POST',
        params: {
          userId: data.userId,
          password: data.password,
        },
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
    secondSignUp: builder.mutation({
      query: (data: FormData) => ({
        url: '/sign-api/sign-up-second',
        method: 'POST',
        body: data,
      }),
    }),
    guardianSignUp: builder.mutation({
      query: (data: GuardianFormType) => ({
        url: '/sign-api/sign-up-guardian',
        method: 'POST',
        body: data,
      }),
    }),
    signSecession: builder.mutation({
      query: () => ({
        url: '/sign-api/sign-secession',
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useSendMessageMutation,
  useVerifyMessageMutation,
  useFirstSignUpMutation,
  useSecondSignUpMutation,
  useGuardianSignUpMutation,
  useSignInMutation,
  useSignSecessionMutation,
} = signApi;

export default signApi;
