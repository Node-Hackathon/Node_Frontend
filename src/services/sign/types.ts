export interface SignInFormType {
  userId: string;
  password: string;
}

export interface SignUpMessageFormType {
  phone: string;
  code: string;
}

export interface SignUpFirstFormType {
  name: string;
  address: string;
  birth: string;
  gender: string;
  height: Number;
  weight: Number;
}

export interface SignUpSecondFormType {
  userId: string;
  password: string;
  passwordCheck: string;
  file: File | null;
}

export interface GuardianFormType {
  guardian_name: string | null;
  guardian_address: string | null;
  guardian_phone_num: string | null;
}

export interface ErrorType {
  data: {
    code: number;
    detailMessage: string;
    msg: string;
    success: boolean;
  };
  status: number;
}
