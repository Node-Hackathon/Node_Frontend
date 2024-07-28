import {
  DeepMap,
  FieldError,
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormSetValue,
} from 'react-hook-form';
import { FDBlockFormType, FDCompositionFormType } from '../../services/4d/types';

export type FDFormTypes = FDBlockFormType | FDCompositionFormType;

export interface UploadType<T extends FDFormTypes> {
  question: string;
  manualLink: string;
  register: any;
  name: keyof FDBlockFormType | keyof FDCompositionFormType;
  errors: DeepMap<FieldValues, FieldError>;
  handleSubmit: UseFormHandleSubmit<T>;
  onSubmitHandler: SubmitHandler<T>;
  blockSetValue?: UseFormSetValue<FDBlockFormType>;
  compositionSetValue?: UseFormSetValue<FDCompositionFormType>;
}

export interface ResultType {
  handleReplay: () => void;
  handleNavigate: () => void;
}
