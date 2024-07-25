import { SignInContainer, SignInForm, SignInInputBox, SignInLayout } from './styles';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';
import { Label7 } from '../../components/text/Text';
import { theme } from '../../styles/theme';
import Input from '../../components/input/Input';
import { PrimaryButton } from '../../components/button/Button';
import { useSignIn } from './events';
import { Link } from 'react-router-dom';

export default function SignIn() {
  const { register, handleSubmit, errors, handleSignIn } = useSignIn();

  return (
    <SignInContainer>
      <Logo />
      <SignInLayout>
        <SignInForm onSubmit={handleSubmit(handleSignIn)}>
          <SignInInputBox>
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
          </SignInInputBox>
          <PrimaryButton size="l" type="submit">
            로그인
          </PrimaryButton>
        </SignInForm>
        <Link to="/signUp">
          <Label7 color={theme.colors.textHeavy}>회원가입</Label7>
        </Link>
      </SignInLayout>
      <Link to="/list">
        <PrimaryButton size="l">센터 리스트</PrimaryButton>
      </Link>
    </SignInContainer>
  );
}
