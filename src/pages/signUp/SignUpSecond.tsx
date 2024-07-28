import { memo } from 'react';
import { PrimaryButton } from '../../components/button/Button';
import Input from '../../components/input/Input';
import { SignUpForm, SignUpInputBox } from './styles';
import { SignUpSecondType } from './types';

function SignUpSecond({
  register,
  secondHandleSubmit,
  errors,
  onSecondSubmit,
  secondSetValue,
  secondClearErrors,
  secondSetError,
  validatePasswordCheck,
}: SignUpSecondType) {
  return (
    <SignUpForm onSubmit={secondHandleSubmit(onSecondSubmit)}>
      <SignUpInputBox>
        <Input
          type="text"
          label="아이디"
          placeholder="서비스에서 사용할 아이디를 입력해주세요."
          name="userId"
          size="l"
          register={register('userId', {
            required: '아이디를 입력해주세요.',
          })}
          errors={errors}
        />
        <Input
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          name="password"
          size="l"
          register={register('password', {
            required: '비밀번호를 입력해주세요.',
          })}
          errors={errors}
        />
        <Input
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호를 한 번 더 입력해주세요."
          name="passwordCheck"
          size="l"
          register={register('passwordCheck', {
            required: '비밀번호를 입력해주세요.',
            validate: validatePasswordCheck,
          })}
          errors={errors}
        />
        <Input
          type="file"
          label="본인 사진"
          name="file"
          size="s"
          register={register('file')}
          errors={errors}
          secondSetValue={secondSetValue}
          secondClearErrors={secondClearErrors}
          secondSetError={secondSetError}
        />
      </SignUpInputBox>
      <PrimaryButton size="l">다음</PrimaryButton>
    </SignUpForm>
  );
}

export default memo(SignUpSecond);
