import { theme } from '../../styles/theme';
import { useTogglePassword } from './events';
import {
  InputContainer,
  InputBase,
  InputMessage,
  InputPlaceholder,
  InputBox,
  InputIcon,
} from './styles';
import { InputType, PasswordInputType } from './types';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

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

function Input({ type, label, placeholder, name, register, errors, size }: InputType) {
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
