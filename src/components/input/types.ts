import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormClearErrors,
  UseFormSetValue,
} from 'react-hook-form';
import { SignUpFirstFormType, SignUpMessageFormType } from '../../services/sign/types';

export interface PasswordInputType {
  name: string;
  register: any;
  errors: DeepMap<FieldValues, FieldError>;
  placeholder?: string;
  size?: 'l' | 's';
}

export interface VerifyInputType {
  name: keyof SignUpMessageFormType;
  register: any;
  errors: DeepMap<FieldValues, FieldError>;
  placeholder?: string;
  size?: 'l' | 's';
  type: string;
  formattedCountdown?: string;
}

export interface GenderInputType {
  name: keyof SignUpFirstFormType;
  register: any;
  errors: DeepMap<FieldValues, FieldError>;
  firstSetValue?: UseFormSetValue<SignUpFirstFormType>;
}

export type BirthPiece = Date | null;

export type SelectedBirth = BirthPiece | [BirthPiece, BirthPiece];

export interface BirthInputType {
  name: keyof SignUpFirstFormType;
  register: any;
  errors: DeepMap<FieldValues, FieldError>;
  placeholder?: string;
  size?: 'l' | 's';
  type: string;
  firstSetValue?: UseFormSetValue<SignUpFirstFormType>;
}

export interface AddressInputType {
  name: keyof SignUpFirstFormType;
  register: any;
  errors: DeepMap<FieldValues, FieldError>;
  placeholder?: string;
  size?: 'l' | 's';
  type: string;
  firstSetValue?: UseFormSetValue<SignUpFirstFormType>;
  firstClearErrors?: UseFormClearErrors<SignUpFirstFormType>;
}

export interface InputType {
  name: string;
  register: any;
  errors: DeepMap<FieldValues, FieldError>;
  placeholder?: string;
  size?: 'l' | 's';
  type: string;
  formattedCountdown?: string;
  label: string;
  firstSetValue?: UseFormSetValue<SignUpFirstFormType>;
  firstClearErrors?: UseFormClearErrors<SignUpFirstFormType>;
}

export interface InputStyleType {
  name?: string;
  size?: 'l' | 's';
  $iserror?: boolean;
}
