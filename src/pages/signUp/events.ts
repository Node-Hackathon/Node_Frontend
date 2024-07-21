import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpPhoneType } from './types';
import { useState } from 'react';
import { useSendMessageMutation } from '../../services/sign/signApi';

export const useSignIn = () => {
  const [requestMessage] = useSendMessageMutation();

  const totalSteps = 3;
  // eslint-disable-next-line no-unused-vars
  const [currentStep, setCurrentStep] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [prevStep, setPrevStep] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [isForward, setIsForward] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [buttonText, setButtonText] = useState('인증하기');

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setPrevStep(currentStep);
      setCurrentStep(currentStep + 1);
      setIsForward(true);
    }
  };

  /*const handlePrev = () => {
    if (currentStep > 0) {
      setPrevStep(currentStep);
      setCurrentStep(currentStep - 1);
      setIsForward(false);
    }
  };*/

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpPhoneType>();

  const handleSendMessage: SubmitHandler<SignUpPhoneType> = async (data: SignUpPhoneType) => {
    try {
      requestMessage(data.phone)
        .unwrap()
        .then((response) => {
          console.log(response);
          setIsPhoneVerified(true);
          setButtonText('다음');
        })
        .catch((error) => console.log(error));
    } catch (error) {
      alert('인증번호 발송이 실패했습니다.');
    }
  };

  const handleVerified: SubmitHandler<SignUpPhoneType> = async (data: SignUpPhoneType) => {
    console.log(data.number);
    handleNext();
  };

  const onSubmit = (data: SignUpPhoneType) => {
    if (!isPhoneVerified) {
      handleSendMessage(data);
    } else {
      handleVerified(data);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    currentStep,
    prevStep,
    totalSteps,
    isForward,
    isPhoneVerified,
    buttonText,
  };
};
