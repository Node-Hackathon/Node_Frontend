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
    console.log('로그인 성공!');
    console.log();
    navigate('/main');
  };

  return { register, handleSubmit, errors, handleSignIn };
};
