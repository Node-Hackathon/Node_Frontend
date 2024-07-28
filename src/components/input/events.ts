import React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  GuardianFormType,
  SignUpFirstFormType,
  SignUpSecondFormType,
} from '../../services/sign/types';
import { UseFormClearErrors, UseFormSetError, UseFormSetValue } from 'react-hook-form';
import { SelectedBirth } from './types';
import { Address } from 'react-daum-postcode';
import { FDBlockFormType, FDCompositionFormType } from '../../services/4d/types';

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
  const handleGenderChange = useCallback(
    (gender: string) => {
      setSelectedGender(gender);
      firstSetValue?.(name, gender, { shouldValidate: true, shouldDirty: true });
    },
    [firstSetValue, name],
  );

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
  const handleInputClick = useCallback(() => {
    setIsCalendarOpen((prevState) => !prevState);
  }, []);

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
  const handleDateChange = useCallback((date: Date) => {
    setSelectedBirth(date);
    setIsCalendarOpen(false);
  }, []);

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
  name: keyof SignUpFirstFormType | keyof GuardianFormType,
  firstSetValue: UseFormSetValue<SignUpFirstFormType> | undefined,
  firstClearErrors: UseFormClearErrors<SignUpFirstFormType> | undefined,
  guardianSetValue: UseFormSetValue<GuardianFormType> | undefined,
  guardianClearErrors: UseFormClearErrors<GuardianFormType> | undefined,
) => {
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [addressValue, setAddressValue] = useState('');

  // 인풋 클릭 처리
  const handleAddressClick = useCallback(() => {
    setIsPostOpen(true);
  }, []);

  // 주소 선택 시 상태 업데이트 및 모달 닫기
  const completeHandler = useCallback(
    (data: Address) => {
      if (name === 'address') {
        firstSetValue?.(name, data.address, { shouldValidate: true, shouldDirty: true });
        firstClearErrors?.(name);
      } else if (name === 'guardian_address') {
        guardianSetValue?.(name, data.address, { shouldValidate: true, shouldDirty: true });
        guardianClearErrors?.(name);
      }
      setAddressValue(data.address);
      setIsPostOpen(false);
    },
    [firstSetValue, name, firstClearErrors],
  );

  return { isPostOpen, setIsPostOpen, addressValue, handleAddressClick, completeHandler };
};

// 이미지 인풋에서 사용
export const useImageInput = (
  name: keyof SignUpSecondFormType | keyof FDBlockFormType | keyof FDCompositionFormType,
  secondSetValue: UseFormSetValue<SignUpSecondFormType> | undefined,
  secondSetError: UseFormSetError<SignUpSecondFormType> | undefined,
  secondClearErrors: UseFormClearErrors<SignUpSecondFormType> | undefined,
  blockSetValue: UseFormSetValue<FDBlockFormType> | undefined,
  compositionSetValue: UseFormSetValue<FDCompositionFormType> | undefined,
) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isFileLoaded, setIsFileLoaded] = useState<boolean>(false);

  // 수시로 이미지 파일 저장
  useEffect(() => {
    if (secondSetValue) {
      if (name === 'file') {
        secondSetValue(name, file);
      }
    }
    if (blockSetValue) {
      if (name === 'blockImage') {
        blockSetValue(name, file);
      }
    }
    if (compositionSetValue) {
      if (name === 'composition_image') {
        compositionSetValue(name, file);
      }
    }
  }, [file, name, secondSetValue, blockSetValue]);

  // 파일 상태 리셋 함수
  const resetFileState = () => {
    setPreview(null);
    setFile(null);
    setIsFileLoaded(false);
  };

  // 파일 선택 시 호출
  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        const selectedFile = e.target.files[0];

        if (selectedFile && !selectedFile.type.startsWith('image/')) {
          // 이미지가 아닌 파일 선택 시 에러 설정
          if (secondSetError) {
            secondSetError('file', {
              type: 'fileType',
              message: '이미지만 등록할 수 있습니다',
            });
          }
          resetFileState();
          return;
        } else {
          // 에러 클리어
          if (name === 'file') {
            secondClearErrors?.(name);
            secondSetValue?.(name, selectedFile);
          }
          // 파일을 비동기적으로 읽기
          const reader = new FileReader();

          // 읽기가 완료되었을 때만 상태를 업데이트
          reader.onloadend = () => {
            const imageUrl = reader.result as string;
            setPreview(imageUrl);
            setFile(selectedFile);
            setIsFileLoaded(true);

            // 다른 요소에 포커스를 주어 파일 인풋 포커스 해제
            if (e.target) {
              e.target.blur(); // 인풋 포커스 해제
              const nextElement = e.target.nextElementSibling as HTMLElement;
              if (nextElement) {
                nextElement.focus(); // 다음 요소에 포커스
              }
            }
          };

          reader.readAsDataURL(selectedFile);

          // 파일 읽기 상태 초기화
          setIsFileLoaded(false);
        }
      } else {
        // 파일이 선택되지 않았을 경우 상태 리셋
        resetFileState();
      }
    },
    [name, secondClearErrors, secondSetError],
  );

  return { preview, handleFileChange, isFileLoaded };
};
