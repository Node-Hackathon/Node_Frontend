import { SubmitHandler, useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import {
  GuardianFormType,
  SignUpFirstFormType,
  SignUpMessageFormType,
  SignUpSecondFormType,
} from '../../services/sign/types';
import { useDispatch } from 'react-redux';
import { nextStep, setStepReset, setTotalSteps } from '../../store/reducer/progressSlice';
import { closeModal, openModal } from '../../store/reducer/modalSlice';
import {
  useFirstSignUpMutation,
  useGuardianSignUpMutation,
  useSecondSignUpMutation,
  useSendMessageMutation,
  useVerifyMessageMutation,
} from '../../services/sign/signApi';
import { useNavigate } from 'react-router-dom';

export const useSignUp = () => {
  // SignUpPage에서 사용
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [requestGuardianSignUp] = useGuardianSignUpMutation();

  useEffect(() => {
    dispatch(setTotalSteps(3));
  }, [dispatch]);

  const handleModalYes = () => {
    dispatch(closeModal());
    navigate('/signUp/guardian', { replace: true });
  };

  const handleModalNo = () => {
    dispatch(closeModal());
    onGuardianSubmit({
      guardian_address: null,
      guardian_name: null,
      guardian_phone_num: null,
    });
  };

  const onGuardianSubmit = async (data: GuardianFormType) => {
    try {
      await requestGuardianSignUp(data).unwrap();
      navigate('/signIn', { replace: true });
    } catch (error) {
      console.error(error);
      alert('회원가입에 실패했습니다.');
    }
  };

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
      await requestVerify(data.code).unwrap();

      dispatch(nextStep());
      messageReset();
    } catch (error: any) {
      if (error.status === 400) {
        messageSetError(
          'code',
          { message: '인증번호가 일치하지 않습니다.' },
          { shouldFocus: true },
        );
      } else {
        alert('인증번호 인증이 실패했습니다.');
      }
      console.error(error);
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
    reset: firstReset,
    formState: { errors: firstErrors },
  } = useForm<SignUpFirstFormType>();

  const [requestFirstSignUp] = useFirstSignUpMutation();

  // SignUpFirst 폼 제출 처리 함수
  const onFirstSubmit = async (data: SignUpFirstFormType) => {
    try {
      await requestFirstSignUp(data).unwrap();
      dispatch(nextStep());
      firstReset();
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
    reset: secondReset,
    formState: { errors: secondErrors },
    watch,
  } = useForm<SignUpSecondFormType>();

  const [requestSecondSignUp] = useSecondSignUpMutation();

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

    const file = data.file;
    if (file && file instanceof File) {
      formData.append('file', file);

      try {
        await requestSecondSignUp(formData).unwrap();
        dispatch(
          openModal({
            question1: '보호자 정보를',
            question2: '입력하시겠습니까?',
          }),
        );
        dispatch(setStepReset());
        secondReset();
      } catch (error: any) {
        if (error.status === 400) {
          secondSetError('userId', {
            type: 'manual',
            message: '아이디가 중복되었습니다.',
          });
        } else {
          alert(error.data.detailMessage);
        }
        console.error('폼 제출 오류:', error);
      }
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

  /*formData.forEach((value, key) => {
    if (value instanceof File) {
      console.log(`${key}: ${value.name}`); // 파일 이름만 출력
    } else {
      console.log(`${key}: ${value}`);
    }
  });*/

  // GuardianPage 에서 사용

  return {
    handleModalNo,
    handleModalYes,
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

export const useGuardianSignUp = () => {
  const navigate = useNavigate();

  const {
    register: guardianRegister,
    handleSubmit: guardianHandleSubmit,
    setValue: guardianSetValue,
    clearErrors: guardianClearErrors,
    reset: guardianReset,
    formState: { errors: guardianErrors },
  } = useForm<GuardianFormType>();

  const [requestGuardianSignUp] = useGuardianSignUpMutation();

  const onGuardianSubmit = async (data: GuardianFormType) => {
    try {
      await requestGuardianSignUp(data).unwrap();
      navigate('/signIn', { replace: true });
      guardianReset();
    } catch (error) {
      console.error(error);
      alert('보호자 정보 입력에 실패했습니다.');
    }
  };

  return {
    guardianRegister,
    guardianHandleSubmit,
    guardianErrors,
    onGuardianSubmit,
    guardianSetValue,
    guardianClearErrors,
  };
};
