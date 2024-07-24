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
  id: string;
  password: string;
  passwordCheck: string;
  profile: File;
}
