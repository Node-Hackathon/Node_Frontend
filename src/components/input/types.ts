import { DeepMap, FieldError, FieldValues } from 'react-hook-form';

export interface PasswordInputType {
  placeholder: string;
  name: string;
  register: any;
  errors: DeepMap<FieldValues, FieldError>;
  size?: 'l' | 's';
}

export interface InputType extends PasswordInputType {
  type: string;
  label: string;
}

export interface InputStyleType {
  name?: string;
  size?: 'l' | 's';
  isError?: boolean;
}
