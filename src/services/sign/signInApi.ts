import axios from 'axios';
import { SignInParams, SignInResultDto, ErrorResponse } from '../../pages/signIn/types';

export const signIn = async (params: SignInParams): Promise<SignInResultDto> => {
  try {
    const response = await axios.post<SignInResultDto>('/sign-api/sign-in', null, {
      params: {
        userId: params.userId,
        password: params.password,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = response.data;
    console.log('API 응답:', response);
    console.log('JWT Token:', result.token);
    return result;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorResponse: ErrorResponse = error.response.data;
      console.error('API 호출 중 오류 발생:', errorResponse);
    } else {
      console.error('API 호출 중 오류 발생:', error);
    }
    throw error;
  }
};
