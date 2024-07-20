import { useCallback, useState } from 'react';

export const useTogglePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswords = useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);

  return { showPassword, handleTogglePasswords };
};
