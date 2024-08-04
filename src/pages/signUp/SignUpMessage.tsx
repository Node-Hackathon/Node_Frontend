import { memo } from 'react';
import { PrimaryButton } from '../../components/button/Button';
import Input from '../../components/input/Input';
import { SignUpForm, SignUpInputBox } from './styles';
import { SignUpMessageType } from './types';

function SignUpMessage({
  register,
  messageHandleSubmit,
  errors,
  onMessageSubmit,
  isPhoneVerified,
  buttonText,
  formattedCountdown,
}: SignUpMessageType) {
  return (
    <SignUpForm onSubmit={messageHandleSubmit(onMessageSubmit)}>
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
              value: /^\d{3}-\d{4}-\d{4}$/,
              message: '000-0000-0000 형식으로 입력해주세요.',
            },
          })}
          errors={errors}
        />
        {isPhoneVerified && (
          <Input
            type="code"
            label="인증번호"
            placeholder="인증번호를 입력해주세요."
            name="code"
            size="l"
            register={register('code')}
            errors={errors}
            formattedCountdown={formattedCountdown}
          />
        )}
      </SignUpInputBox>
      <PrimaryButton size="l">{buttonText}</PrimaryButton>
    </SignUpForm>
  );
}

export default memo(SignUpMessage);
