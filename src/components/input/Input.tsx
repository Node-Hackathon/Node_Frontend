import { theme } from '../../styles/theme';
import AddressInput from './AddressInput';
import BirthInput from './BirthInput';
import GenderInput from './GenderInput';
import ImageInput from './ImageInput';
import PasswordInput from './PasswordInput';
import { InputContainer, InputBase, InputMessage, InputPlaceholder, InputBox } from './styles';
import { InputType } from './types';
import VerifyInput from './VerifyInput';

function Input({
  type,
  label,
  placeholder,
  name,
  register,
  errors,
  size,
  formattedCountdown,
  firstSetValue,
  firstClearErrors,
  secondSetValue,
  secondClearErrors,
  secondSetError,
  guardianSetValue,
  guardianClearErrors,
}: InputType) {
  return (
    <InputContainer>
      <InputPlaceholder>{label}</InputPlaceholder>
      <InputBox size={size} name={name}>
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
        ) : name === 'gender' ? (
          <GenderInput
            name={name}
            register={register}
            errors={errors}
            firstSetValue={firstSetValue}
          />
        ) : name === 'birth' ? (
          <BirthInput
            placeholder={placeholder}
            name={name}
            register={register}
            errors={errors}
            size={size}
            type={type}
            firstSetValue={firstSetValue}
          />
        ) : name === 'address' || name === 'guardian_address' ? (
          <AddressInput
            placeholder={placeholder}
            name={name}
            register={register}
            errors={errors}
            size={size}
            type={type}
            firstSetValue={firstSetValue}
            firstClearErrors={firstClearErrors}
            guardianSetValue={guardianSetValue}
            guardianClearErrors={guardianClearErrors}
          />
        ) : name === 'file' ? (
          <ImageInput
            name={name}
            register={register}
            errors={errors}
            size={size}
            type={type}
            secondSetValue={secondSetValue}
            secondClearErrors={secondClearErrors}
            secondSetError={secondSetError}
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
