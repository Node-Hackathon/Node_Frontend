import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormClearErrors,
  UseFormSetError,
  UseFormSetValue,
} from 'react-hook-form';
import {
  GuardianFormType,
  SignUpFirstFormType,
  SignUpMessageFormType,
  SignUpSecondFormType,
} from '../../services/sign/types';
import { FDBlockFormType, FDCompositionFormType } from '../../services/4d/types';

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
  name: keyof SignUpFirstFormType | keyof GuardianFormType;
  register: any;
  errors: DeepMap<FieldValues, FieldError>;
  placeholder?: string;
  size?: 'l' | 's';
  type: string;
  firstSetValue?: UseFormSetValue<SignUpFirstFormType>;
  firstClearErrors?: UseFormClearErrors<SignUpFirstFormType>;
  guardianSetValue?: UseFormSetValue<GuardianFormType>;
  guardianClearErrors?: UseFormClearErrors<GuardianFormType>;
}

export interface ImageInputType {
  name: keyof SignUpSecondFormType | keyof FDBlockFormType | keyof FDCompositionFormType;
  register: any;
  errors: DeepMap<FieldValues, FieldError>;
  size?: 'l' | 's';
  type: string;
  secondSetValue?: UseFormSetValue<SignUpSecondFormType>;
  secondClearErrors?: UseFormClearErrors<SignUpSecondFormType>;
  secondSetError?: UseFormSetError<SignUpSecondFormType>;
  blockSetValue?: UseFormSetValue<FDBlockFormType>;
  compositionSetValue?: UseFormSetValue<FDCompositionFormType>;
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
  secondSetValue?: UseFormSetValue<SignUpSecondFormType>;
  secondClearErrors?: UseFormClearErrors<SignUpSecondFormType>;
  secondSetError?: UseFormSetError<SignUpSecondFormType>;
  guardianSetValue?: UseFormSetValue<GuardianFormType>;
  guardianClearErrors?: UseFormClearErrors<GuardianFormType>;
}

export interface InputStyleType {
  name?: string;
  size?: 'l' | 's';
  $iserror?: boolean;
}

export interface ImageInputStyleType {
  size?: 'l' | 's';
  $iserror?: boolean;
}
