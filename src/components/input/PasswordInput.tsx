import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { useTogglePassword } from './events';
import { InputBase, InputIcon } from './styles';
import { PasswordInputType } from './types';
import { theme } from '../../styles/theme';

export default function PasswordInput({
  placeholder,
  name,
  register,
  errors,
  size,
}: PasswordInputType) {
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
