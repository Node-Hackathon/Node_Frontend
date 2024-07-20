import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../components/input/Input';
import { SignInType } from '../pages/signIn/types';

export default function InputTest() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignInType>();

  const onSubmit: SubmitHandler<SignInType> = (data: SignInType) => {
    console.log(data);
    if (data.id !== 'jieun') {
      setError('id', { message: '존재하지 않는 아이디입니다!' }, { shouldFocus: true });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        label="아이디"
        placeholder="아이디를 입력해주세요"
        name="id"
        size="l"
        register={register('id', { required: '아이디를 입력해주세요.' })}
        errors={errors}
      />
      <Input
        type={'password'}
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        name="password"
        size="l"
        register={register('password', {
          required: '비밀번호를 입력해주세요.',
        })}
        errors={errors}
      />
      <button type="submit">제출</button>
    </form>
  );
}
