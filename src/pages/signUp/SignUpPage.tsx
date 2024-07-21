import ProgressBar from '../../components/progress/ProgressBar';
import { Title1 } from '../../components/text/Text';
import { theme } from '../../styles/theme';
import { SignUpContainer, SignUpForm, SignUpInputBox, SignUpTitle } from './styles';
import Input from '../../components/input/Input';
import { useSignIn } from './events';
import { PrimaryButton } from '../../components/button/Button';

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    currentStep,
    prevStep,
    totalSteps,
    isForward,
    isPhoneVerified,
    buttonText,
  } = useSignIn();

  return (
    <SignUpContainer>
      <SignUpTitle>
        <Title1 color={theme.colors.textBlack}>회원가입</Title1>
        <ProgressBar
          currentStep={currentStep}
          prevStep={prevStep}
          totalStep={totalSteps}
          isForward={isForward}
        />
      </SignUpTitle>
      <SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <SignUpInputBox>
          <Input
            type="tel"
            label="전화번호"
            placeholder="010-0000-0000"
            name="phone"
            size="l"
            register={register('phone', {
              required: '전화번호를 입력해주세요.',
              pattern: {
                value: /^010-\d{4}-\d{4}$/,
                message: '010-0000-0000 형식으로 입력해주세요.',
              },
            })}
            errors={errors}
          />
          {isPhoneVerified && (
            <Input
              type="number"
              label="인증번호"
              placeholder="인증번호를 입력해주세요."
              name="number"
              size="l"
              register={register('number', {
                required: '인증번호를 입력해주세요.',
              })}
              errors={errors}
            />
          )}
        </SignUpInputBox>
        <PrimaryButton size="l">{buttonText}</PrimaryButton>
      </SignUpForm>
    </SignUpContainer>
  );
}
