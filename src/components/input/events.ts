import { useCallback, useEffect, useRef, useState } from 'react';
import { SignUpFirstFormType } from '../../services/sign/types';
import { UseFormClearErrors, UseFormSetValue } from 'react-hook-form';
import { SelectedBirth } from './types';
import { Address } from 'react-daum-postcode';

// 비밀번호 인풋에서 사용
export const useTogglePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswords = useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);

  return { showPassword, handleTogglePasswords };
};

// 성별 인풋에서 사용
export const useGenderInput = (
  firstSetValue: UseFormSetValue<SignUpFirstFormType> | undefined,
  name: keyof SignUpFirstFormType,
) => {
  const [selectedGender, setSelectedGender] = useState('');

  // 버튼 클릭 시
  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender);
    firstSetValue?.(name, gender, { shouldValidate: true, shouldDirty: true });
  };

  return { selectedGender, setSelectedGender, handleGenderChange };
};

// 생일 선택 인풋에서 사용
const formatDateForDisplay = (date: Date): string =>
  `${date.getFullYear()}년 ${String(date.getMonth() + 1).padStart(2, '0')}월 ${String(date.getDate()).padStart(2, '0')}일`;

export const useBirthInput = (
  firstSetValue: UseFormSetValue<SignUpFirstFormType> | undefined,
  name: keyof SignUpFirstFormType,
) => {
  const [selectedBirth, setSelectedBirth] = useState<SelectedBirth>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [birthInputValue, setBirthInputValue] = useState('');
  const inputRef = useRef<HTMLDivElement>(null);

  // 인풋 클릭 처리
  const handleInputClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  // 외부 클릭 시 캘린더 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 선택한 날짜를 폼과 인풋에 설정
  useEffect(() => {
    if (selectedBirth instanceof Date) {
      const formattedDate = formatDateForDisplay(selectedBirth);
      firstSetValue?.(name, formattedDate, { shouldValidate: true, shouldDirty: true });
      setBirthInputValue(formattedDate);
    }
  }, [selectedBirth, firstSetValue, name]);

  // 날짜 변경 시 상태 업데이트 및 캘린더 닫기
  const handleDateChange = (date: Date) => {
    setSelectedBirth(date);
    setIsCalendarOpen(false);
  };

  return {
    handleInputClick,
    isCalendarOpen,
    selectedBirth,
    setSelectedBirth,
    inputRef,
    birthInputValue,
    handleDateChange,
  };
};

// 주소 인풋에서 사용
export const useAddressInput = (
  firstSetValue: UseFormSetValue<SignUpFirstFormType> | undefined,
  name: keyof SignUpFirstFormType,
  firstClearErrors: UseFormClearErrors<SignUpFirstFormType> | undefined,
) => {
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [addressValue, setAddressValue] = useState('');

  const handleAddressClick = () => {
    setIsPostOpen(true);
  };

  const completeHandler = (data: Address) => {
    firstSetValue?.(name, data.address, { shouldValidate: true, shouldDirty: true });
    setAddressValue(data.address);
    firstClearErrors?.(name);
    setIsPostOpen(false);
  };

  return { isPostOpen, setIsPostOpen, addressValue, handleAddressClick, completeHandler };
};
