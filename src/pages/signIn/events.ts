import { SubmitHandler, useForm } from 'react-hook-form';
import { SignInType } from './types';

export const useSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInType>();

  const handleSignIn: SubmitHandler<SignInType> = (data: SignInType) => {
    console.log(data);
  };

  return { register, handleSubmit, errors, handleSignIn };
};
