import { memo } from 'react';
import { PrimaryButton } from '../../components/button/Button';
import Input from '../../components/input/Input';
import { SignUpForm, SignUpInputBox, SignUpInputPair } from './styles';
import { SignUpFirstType } from './types';

function SignUpFirst({
  register,
  firstHandleSubmit,
  errors,
  onFirstSubmit,
  firstSetValue,
}: SignUpFirstType) {
  return (
    <SignUpForm onSubmit={firstHandleSubmit(onFirstSubmit)}>
      <SignUpInputBox>
        <Input
          type="text"
          label="이름"
          placeholder="성함을 입력해주세요."
          name="name"
          size="l"
          register={register('name', {
            required: '성함을 입력해주세요.',
          })}
          errors={errors}
        />
        <Input
          type="gender"
          label="성별"
          name="gender"
          register={register('gender', {
            required: '성별을 선택해주세요.',
          })}
          errors={errors}
          firstSetValue={firstSetValue}
        />
        <Input
          type="text"
          label="생년월일"
          placeholder="생년월일을 선택해주세요."
          name="birth"
          size="l"
          register={register('birth', {
            required: '생년월일을 입력해주세요.',
          })}
          errors={errors}
          firstSetValue={firstSetValue}
        />
        <SignUpInputPair>
          <Input
            type="number"
            label="키"
            placeholder="cm"
            name="height"
            size="s"
            register={register('height', {
              required: '키를 입력해주세요.',
            })}
            errors={errors}
          />
          <Input
            type="number"
            label="몸무게"
            placeholder="kg"
            name="weight"
            size="s"
            register={register('weight', {
              required: '몸무게를 입력해주세요.',
            })}
            errors={errors}
          />
        </SignUpInputPair>
        <Input
          type="text"
          label="주소"
          placeholder="주소를 입력해주세요."
          name="address"
          size="l"
          register={register('address', {
            required: '주소를 입력해주세요.',
          })}
          errors={errors}
        />
      </SignUpInputBox>
      <PrimaryButton size="l">다음</PrimaryButton>
    </SignUpForm>
  );
}

export default memo(SignUpFirst);
