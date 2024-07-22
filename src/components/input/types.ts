import { DeepMap, FieldError, FieldValues } from 'react-hook-form';

export interface PasswordInputType {
  placeholder: string;
  name: string;
  register: any;
  errors: DeepMap<FieldValues, FieldError>;
  size?: 'l' | 's';
}
export interface VerifyInputType extends PasswordInputType {
  type: string;
  formattedCountdown?: string;
}

export interface InputType extends VerifyInputType {
  label: string;
}

export interface InputStyleType {
  name?: string;
  size?: 'l' | 's';
  $iserror?: boolean;
}
