import { DeepMap, FieldError, FieldValues } from 'react-hook-form';

export interface InputType {
  type: string;
  label: string;
  placeholder: string;
  name: string;
  register: any;
  errors: DeepMap<FieldValues, FieldError>;
  size?: 'l' | 's';
}

export interface InputStyleType {
  name?: string;
  size?: 'l' | 's';
  isError?: boolean;
}
