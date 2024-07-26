import { theme } from '../../styles/theme';
import { Label2 } from '../text/Text';
import { InputBase, InputTimer } from './styles';
import { VerifyInputType } from './types';

export default function VerifyInput({
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
