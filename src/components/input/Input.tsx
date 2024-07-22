import { theme } from '../../styles/theme';
import { useTogglePassword } from './events';
import {
  InputContainer,
  InputBase,
  InputMessage,
  InputPlaceholder,
  InputBox,
  InputIcon,
  InputTimer,
} from './styles';
import { InputType, PasswordInputType, VerifyInputType } from './types';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Label2 } from '../text/Text';

function PasswordInput({ placeholder, name, register, errors, size }: PasswordInputType) {
  const { showPassword, handleTogglePasswords } = useTogglePassword();

  return (
    <>
      <InputBase
        type={showPassword ? 'text' : 'password'}
        {...register}
        placeholder={placeholder}
        size={size}
        $iserror={!!errors[name]}
        name={name}
      />
      <InputIcon onClick={handleTogglePasswords}>
        {showPassword ? (
          <IoMdEyeOff size="1.5rem" color={theme.colors.textHeavy} />
        ) : (
          <IoMdEye size="1.5rem" color={theme.colors.textHeavy} />
        )}
      </InputIcon>
    </>
  );
}

function VerifyInput({
  placeholder,
  name,
  register,
  errors,
  size,
  type,
  formattedCountdown,
}: VerifyInputType) {
  return (
    <>
      <InputBase
        type={type}
        {...register}
        placeholder={placeholder}
        size={size}
        $iserror={!!errors[name]}
        name={name}
      />
      <InputTimer>
        <Label2 color={theme.colors.primaryStrong}>{formattedCountdown}</Label2>
      </InputTimer>
    </>
  );
}

function Input({
  type,
  label,
  placeholder,
  name,
  register,
  errors,
  size,
  formattedCountdown,
}: InputType) {
  return (
    <InputContainer>
      <InputPlaceholder>{label}</InputPlaceholder>
      <InputBox size={size}>
        {type === 'password' ? (
          <PasswordInput
            placeholder={placeholder}
            name={name}
            register={register}
            errors={errors}
            size={size}
          />
        ) : name === 'code' ? (
          <VerifyInput
            placeholder={placeholder}
            name={name}
            register={register}
            errors={errors}
            size={size}
            type={type}
            formattedCountdown={formattedCountdown}
          />
        ) : (
          <InputBase
            type={type}
            {...register}
            placeholder={placeholder}
            size={size}
            $iserror={!!errors[name]}
            name={name}
          />
        )}
      </InputBox>
      {errors[name] && (
        <InputMessage color={errors[name] ? theme.colors.error : theme.colors.primaryNormal}>
          {errors[name]?.message}
        </InputMessage>
      )}
    </InputContainer>
  );
}

export default Input;
