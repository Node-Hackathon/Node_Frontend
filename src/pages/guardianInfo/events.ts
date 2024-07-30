import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useGuardianInfoEvents = () => {
  const navigate = useNavigate();

  const [guardianName, setGuardianName] = useState('황형진');
  const [guardianPhone, setGuardianPhone] = useState('010-1111-2222');
  const [guardianAddress, setGuardianAddress] = useState('경기도 성남시 수정구 시민로 164번길 2');
  const isGuardianExist = false; // 보호자 객체 존재 여부 상태

  // isGuardianExist가 false일 경우 guardianObj에 null 반환
  const guardianObj = isGuardianExist
    ? {
        guardianName,
        guardianPhone,
        guardianAddress,
        setGuardianName,
        setGuardianPhone,
        setGuardianAddress,
      }
    : null;

  const handleGoToAddGuardian = () => {
    navigate('/signUp-guardian');
  };

  return { guardianObj, isGuardianExist, handleGoToAddGuardian };
};
