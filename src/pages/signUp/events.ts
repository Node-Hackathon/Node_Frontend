import { SubmitHandler, useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import { SignUpFirstFormType, SignUpMessageFormType } from '../../services/sign/types';
import { useDispatch } from 'react-redux';
import { nextStep, setTotalSteps } from '../../store/reducer/progressSlice';
import { useSendMessageMutation, useVerifyMessageMutation } from '../../services/sign/signApi';

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
    formState: { errors: messageErrors },
  } = useForm<SignUpMessageFormType>({ mode: 'onBlur' });

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
      if (response.code === 200) {
        dispatch(nextStep());
      } else {
        messageSetError(
          'code',
          { message: '인증번호가 일치하지 않습니다.' },
          { shouldFocus: true },
        );
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
    formState: { errors: firstErrors },
  } = useForm<SignUpFirstFormType>();

  const onFirstSubmit = () => {};

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
  };
};
