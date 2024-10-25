import { PrimaryButton } from '../../components/button/Button';
import Input from '../../components/input/Input';
import { Title1 } from '../../components/text/Text';
import { theme } from '../../styles/theme';
import { useGuardianSignUp } from './events';
import { SignUpContainer, SignUpForm, SignUpInputBox, SignUpTitle } from './styles';

export default function GuardianPage() {
  const {
    guardianHandleSubmit,
    onGuardianSubmit,
    guardianRegister,
    guardianErrors,
    guardianSetValue,
    guardianClearErrors,
  } = useGuardianSignUp();
  return (
    <SignUpContainer>
      <SignUpTitle>
        <Title1 color={theme.colors.textBlack}>보호자 정보</Title1>
      </SignUpTitle>
      <SignUpForm onSubmit={guardianHandleSubmit(onGuardianSubmit)}>
        <SignUpInputBox>
          <Input
            type="text"
            label="이름"
            placeholder="성함을 입력해주세요."
            name="guardian_name"
            size="l"
            register={guardianRegister('guardian_name', {
              required: '성함을 입력해주세요.',
            })}
            errors={guardianErrors}
          />
          <Input
            type="tel"
            label="전화번호"
            placeholder="010-0000-0000"
            name="guardian_phone_num"
            size="l"
            register={guardianRegister('guardian_phone_num', {
              required: '전화번호를 입력해주세요.',
              pattern: {
                value: /^\d{3}-\d{4}-\d{4}$/,
                message: '010-0000-0000 형식으로 입력해주세요.',
              },
            })}
            errors={guardianErrors}
          />
          <Input
            type="text"
            label="주소"
            placeholder="주소를 입력해주세요."
            name="guardian_address"
            size="l"
            register={guardianRegister('guardian_address', {
              required: '주소를 입력해주세요.',
            })}
            errors={guardianErrors}
            guardianSetValue={guardianSetValue}
            guardianClearErrors={guardianClearErrors}
          />
        </SignUpInputBox>
        <PrimaryButton size="l">완료</PrimaryButton>
      </SignUpForm>
    </SignUpContainer>
  );
}
