import { DeepMap, FieldError, FieldValues, UseFormHandleSubmit } from 'react-hook-form';
import { SignUpFirstFormType, SignUpMessageFormType } from '../../services/sign/types';

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
  onFirstSubmit: () => void;
}
