import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormHandleSubmit,
  UseFormSetValue,
} from 'react-hook-form';
import { FDBlockFormType } from '../../services/4d/types';

export interface UploadType {
  question: string;
  buttonText: string;
  buttonEvent?: () => void;
  manualLink?: string;
  register: any;
  errors: DeepMap<FieldValues, FieldError>;
  handleSubmit: UseFormHandleSubmit<FDBlockFormType, undefined>;
  // eslint-disable-next-line no-unused-vars
  onSubmitHandler: (data: FDBlockFormType) => Promise<void>;
  blockSetValue?: UseFormSetValue<FDBlockFormType>;
}
