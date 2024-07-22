import { useCallback, useState } from 'react';
import { SignUpFirstFormType } from '../../services/sign/types';
import { UseFormSetValue } from 'react-hook-form';

export const useTogglePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswords = useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);

  return { showPassword, handleTogglePasswords };
};

export const useGenderInput = () => {
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (
    name: keyof SignUpFirstFormType,
    gender: string,
    firstSetValue: UseFormSetValue<SignUpFirstFormType> | undefined,
  ) => {
    setSelectedGender(gender);
    firstSetValue?.(name, gender);
  };

  return { selectedGender, setSelectedGender, handleGenderChange };
};
