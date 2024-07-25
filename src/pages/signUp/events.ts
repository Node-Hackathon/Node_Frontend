import { SubmitHandler, useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import {
  SignUpFirstFormType,
  SignUpMessageFormType,
  SignUpSecondFormType,
} from '../../services/sign/types';
import { useDispatch } from 'react-redux';
import { nextStep, setTotalSteps } from '../../store/reducer/progressSlice';
import {
  useFirstSignUpMutation,
  useSendMessageMutation,
  useVerifyMessageMutation,
} from '../../services/sign/signApi';

export const useSignUp = () => {
  // SignUpPage에서 사용
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTotalSteps(3));
  }, [dispatch]);

  // SignUpMessage에서 사용
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [buttonText, setButtonText] = useState('인증하기');
  const [countdown, setCountdown] = useState(180);
  const [isCountdownActive, setIsCountdownActive] = useState(true);

  const [requestMessage] = useSendMessageMutation();
  const [requestVerify] = useVerifyMessageMutation();

  const {
    register: messageRegister,
    handleSubmit: messageHandleSubmit,
    setError: messageSetError,
    reset: messageReset,
    setFocus: messageSetFocus,
    formState: { errors: messageErrors },
  } = useForm<SignUpMessageFormType>({
    defaultValues: {
      phone: '',
      code: '',
    },
  });

  // 타이머가 종료되면 초기화 후 버튼 텍스트 변경
  useEffect(() => {
    if (!isCountdownActive) return;

    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 0) {
          clearInterval(timer);
          setButtonText('재인증하기');
          setIsCountdownActive(false);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isCountdownActive]);

  // 포커스 설정 useEffect
  useEffect(() => {
    if (isPhoneVerified) {
      messageSetFocus('code');
    }
  }, [isPhoneVerified, messageSetFocus]);

  const formattedCountdown = `${Math.floor(countdown / 60)}:${(countdown % 60)
    .toString()
    .padStart(2, '0')}`;

  // Countdown 초기화 함수
  const resetCountdown = useCallback(() => {
    setCountdown(180);
    setIsCountdownActive(true);
  }, []);

  // 인증번호 전송 처리 함수
  const handleSendMessage: SubmitHandler<SignUpMessageFormType> = async (
    data: SignUpMessageFormType,
  ) => {
    try {
      await requestMessage(data.phone).unwrap();
      alert('인증번호 전송이 완료되었습니다.');
      setIsPhoneVerified(true);
      resetCountdown();
      messageReset({ code: '' });
      setButtonText('다음');
    } catch (error) {
      console.error(error);
      alert('인증번호 발송이 실패했습니다.');
    }
  };

  // 인증번호 검증 처리 함수
  const handleVerified: SubmitHandler<SignUpMessageFormType> = async (
    data: SignUpMessageFormType,
  ) => {
    if (!data.code) {
      messageSetError('code', { message: '인증번호를 입력해주세요.' }, { shouldFocus: true });
      return;
    }
    try {
      const response = await requestVerify(data.code).unwrap();
      if (response.status === 400) {
        messageSetError(
          'code',
          { message: '인증번호가 일치하지 않습니다.' },
          { shouldFocus: true },
        );
      } else {
        dispatch(nextStep());
      }
    } catch (error) {
      console.error(error);
      alert('인증번호 인증이 실패했습니다.');
    }
  };

  // SignUpMessage 폼 제출 처리 함수
  const onMessageSubmit = (data: SignUpMessageFormType) => {
    if (!isPhoneVerified || buttonText === '재인증하기') {
      handleSendMessage(data);
    } else {
      handleVerified(data);
    }
  };

  // SignUpFirst에서 사용
  const {
    register: firstRegister,
    handleSubmit: firstHandleSubmit,
    setValue: firstSetValue,
    clearErrors: firstClearErrors,
    formState: { errors: firstErrors },
  } = useForm<SignUpFirstFormType>();

  const [requestFirstSignUp] = useFirstSignUpMutation();

  // SignUpFirst 폼 제출 처리 함수
  const onFirstSubmit = async (data: SignUpFirstFormType) => {
    try {
      await requestFirstSignUp(data).unwrap();
      dispatch(nextStep());
    } catch (error) {
      console.error(error);
      alert('회원 정보 전송에 실패했습니다.');
    }
  };

  // SignUpSecond에서 사용
  const {
    register: secondRegister,
    handleSubmit: secondHandleSubmit,
    setValue: secondSetValue,
    clearErrors: secondClearErrors,
    setError: secondSetError,
    formState: { errors: secondErrors },
    watch,
  } = useForm<SignUpSecondFormType>();

  const validatePasswordCheck = (value: string) => {
    // 비밀번호와 비밀번호 확인 필드의 값이 일치하는지 확인
    const password = watch('password');
    return password === value || '비밀번호가 일치하지 않습니다.';
  };

  // SignUpSecond 폼 제출 처리 함수
  const onSecondSubmit = async (data: SignUpSecondFormType) => {
    let formData = new FormData();
    formData.append('userId', data.userId);
    formData.append('password', data.password);
    formData.append('passwordCheck', data.passwordCheck);

    // 폼 데이터에 파일 추가
    const file = data.file;
    if (file && file instanceof File) {
      formData.append('file', file);
      // 콘솔로 폼 데이터를 출력하는 방법
      formData.forEach((value, key) => {
        if (value instanceof File) {
          console.log(`${key}: ${value.name}`); // 파일 이름만 출력
        } else {
          console.log(`${key}: ${value}`);
        }
      });
    } else if (file) {
      secondSetError('file', {
        message: '아직 사진이 로드되지 않았습니다. 버튼을 한 번 더 클릭해주세요.',
      });
      console.error('사진이 아직 완전히 로드되지 않았습니다.');
      return;
    } else {
      secondSetError('file', {
        message: '본인 사진을 선택해주세요.',
      });
      return;
    }
  };

  return {
    messageRegister,
    messageHandleSubmit,
    messageErrors,
    firstRegister,
    firstHandleSubmit,
    firstErrors,
    onMessageSubmit,
    onFirstSubmit,
    isPhoneVerified,
    buttonText,
    formattedCountdown,
    firstSetValue,
    firstClearErrors,
    secondRegister,
    secondHandleSubmit,
    secondSetValue,
    secondErrors,
    onSecondSubmit,
    secondClearErrors,
    secondSetError,
    validatePasswordCheck,
  };
};
