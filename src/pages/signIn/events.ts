import { useForm } from 'react-hook-form';
import { SignInFormType } from '../../services/sign/types';
import { useNavigate } from 'react-router-dom';
import { useSignInMutation } from '../../services/sign/signApi';
import { useDispatch } from 'react-redux';
import { login } from '../../store/reducer/tokenSlice';

export const useSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormType>();

  const [signIn] = useSignInMutation();

  const onSignInHandler = async (data: SignInFormType) => {
    try {
      const response = await signIn(data).unwrap();
      dispatch(login({ accessToken: response.token }));
      navigate('/main', { replace: true });
    } catch (error) {
      console.log(error);
      alert('로그인에 실패했습니다.');
    }
  };

  return { register, handleSubmit, errors, onSignInHandler };
};
