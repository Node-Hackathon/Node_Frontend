import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormClearErrors,
  UseFormHandleSubmit,
  UseFormSetError,
  UseFormSetValue,
} from 'react-hook-form';
import {
  SignUpFirstFormType,
  SignUpMessageFormType,
  SignUpSecondFormType,
} from '../../services/sign/types';

interface SignUpType {
  register: any;
  errors: DeepMap<FieldValues, FieldError>;
}

export interface SignUpMessageType extends SignUpType {
  messageHandleSubmit: UseFormHandleSubmit<SignUpMessageFormType, undefined>;
  // eslint-disable-next-line no-unused-vars
  onMessageSubmit: (data: SignUpMessageFormType) => void;
  isPhoneVerified: boolean;
  buttonText: string;
  formattedCountdown: string;
}

export interface SignUpFirstType extends SignUpType {
  firstHandleSubmit: UseFormHandleSubmit<SignUpFirstFormType, undefined>;
  // eslint-disable-next-line no-unused-vars
  onFirstSubmit: (data: SignUpFirstFormType) => void;
  firstSetValue: UseFormSetValue<SignUpFirstFormType>;
  firstClearErrors: UseFormClearErrors<SignUpFirstFormType>;
}

export interface SignUpSecondType extends SignUpType {
  secondHandleSubmit: UseFormHandleSubmit<SignUpSecondFormType, undefined>;
  // eslint-disable-next-line no-unused-vars
  onSecondSubmit: (data: SignUpSecondFormType) => void;
  secondSetValue: UseFormSetValue<SignUpSecondFormType>;
  secondClearErrors: UseFormClearErrors<SignUpSecondFormType>;
  secondSetError: UseFormSetError<SignUpSecondFormType>;
  // eslint-disable-next-line no-unused-vars
  validatePasswordCheck: (value: string) => boolean | String;
}
