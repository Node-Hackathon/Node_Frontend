export interface SignInType {
  id: string;
  password: string;
}
export interface SignInParams {
  userId: string;
  password: string;
}

export interface SignInResultDto {
  success: boolean;
  code: number;
  msg: string;
  detailMessage: string;
  token: string;
}

export interface ErrorResponse {
  timestamp: string;
  status: number;
  error: string;
  path: string;
}
