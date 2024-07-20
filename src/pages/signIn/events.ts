import { SubmitHandler, useForm } from 'react-hook-form';
import { SignInType } from './types';
import { useNavigate } from 'react-router-dom';

export const useSignIn = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInType>();

  const handleSignIn: SubmitHandler<SignInType> = (data: SignInType) => {
    console.log(data);
    navigate('/main');
  };

  return { register, handleSubmit, errors, handleSignIn };
};
