import ProgressBar from '../../components/progress/ProgressBar';
import { Title1 } from '../../components/text/Text';
import { theme } from '../../styles/theme';
import { SignUpContainer, SignUpTitle } from './styles';
import SignUpMessage from './SignUpMessage';
import SignUpFirst from './SignUpFirst';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useSignUp } from './events';
import SignUpSecond from './SignUpSecond';
import Modal from '../../components/modal/Modal';

export default function SignUpPage() {
  const { currentStep, prevStep, isForward, totalSteps } = useSelector(
    (state: RootState) => state.progress,
  );

  const { isOpen, question1, question2 } = useSelector((state: RootState) => state.modal);

  const {
    handleModalNo,
    handleModalYes,
    messageRegister,
    messageHandleSubmit,
    messageErrors,
    onMessageSubmit,
    isPhoneVerified,
    buttonText,
    formattedCountdown,
    firstRegister,
    firstHandleSubmit,
    firstErrors,
    onFirstSubmit,
    firstSetValue,
    firstClearErrors,
    secondRegister,
    secondHandleSubmit,
    secondErrors,
    onSecondSubmit,
    secondSetValue,
    secondClearErrors,
    secondSetError,
    validatePasswordCheck,
  } = useSignUp();

  return (
    <SignUpContainer>
      <SignUpTitle>
        <Title1 color={theme.colors.textBlack}>회원가입</Title1>
        <ProgressBar
          currentStep={currentStep}
          prevStep={prevStep}
          totalStep={totalSteps}
          isForward={isForward}
        />
      </SignUpTitle>
      {currentStep === 1 && (
        <SignUpMessage
          register={messageRegister}
          messageHandleSubmit={messageHandleSubmit}
          errors={messageErrors}
          onMessageSubmit={onMessageSubmit}
          isPhoneVerified={isPhoneVerified}
          buttonText={buttonText}
          formattedCountdown={formattedCountdown}
        />
      )}
      {currentStep === 2 && (
        <SignUpFirst
          register={firstRegister}
          firstHandleSubmit={firstHandleSubmit}
          errors={firstErrors}
          onFirstSubmit={onFirstSubmit}
          firstSetValue={firstSetValue}
          firstClearErrors={firstClearErrors}
        />
      )}
      {currentStep === 3 && (
        <SignUpSecond
          register={secondRegister}
          secondHandleSubmit={secondHandleSubmit}
          errors={secondErrors}
          onSecondSubmit={onSecondSubmit}
          secondSetValue={secondSetValue}
          secondClearErrors={secondClearErrors}
          secondSetError={secondSetError}
          validatePasswordCheck={validatePasswordCheck}
        />
      )}
      <Modal
        isOpen={isOpen}
        question1={question1}
        question2={question2}
        onClickNo={handleModalNo}
        onClickYes={handleModalYes}
      />
    </SignUpContainer>
  );
}
