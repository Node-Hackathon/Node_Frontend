import { PrimaryButton, SecondaryButton } from '../../components/button/Button';
import ProgressBar from '../../components/progress/ProgressBar';
import { Label1, Title4 } from '../../components/text/Text';
import { theme } from '../../styles/theme';
import CheckBox from './CheckBox';
import {
  CheckBoxContainer,
  DiagnosisBox,
  DiagnosisButton,
  DiagnosisContainer,
  DiagnosisContent,
  DiagnosisTitle,
  ProgressBarBox,
} from './styles';
import { useDiagnosis } from './events';
import Modal from '../../components/modal/Modal';

export default function DiagnosisPage() {
  const {
    isSuccess,
    data,
    currentStep,
    totalSteps,
    prevStepState,
    handleChange,
    handleNext,
    handlePrev,
    isOpen,
    question1,
    question2,
    handleContinue,
    handleRestart,
    checkedValues,
  } = useDiagnosis();

  return (
    <DiagnosisContainer>
      <Modal
        isOpen={isOpen}
        question1={question1}
        question2={question2}
        onClickNo={handleRestart}
        onClickYes={handleContinue}
      />
      {isSuccess && data && (
        <DiagnosisBox>
          <DiagnosisContent>
            <DiagnosisTitle>
              <Label1 color={theme.colors.primaryStrong}>질문 {currentStep}</Label1>
              <Title4>{data[currentStep - 1].diagnosis_detail}</Title4>
            </DiagnosisTitle>
            <ProgressBarBox>
              <ProgressBar
                currentStep={currentStep}
                prevStep={prevStepState}
                totalStep={totalSteps}
                isForward={true}
              />
            </ProgressBarBox>
            <CheckBoxContainer>
              <CheckBox
                id={`check-${currentStep}-0`}
                checked={checkedValues[currentStep] === 0}
                onChange={() => handleChange(currentStep, 0)}
              >
                아니다
              </CheckBox>
              <CheckBox
                id={`check-${currentStep}-1`}
                checked={checkedValues[currentStep] === 1}
                onChange={() => handleChange(currentStep, 1)}
              >
                그렇다
              </CheckBox>
            </CheckBoxContainer>
          </DiagnosisContent>
          <DiagnosisButton>
            <SecondaryButton size="m" onClick={handlePrev}>
              이전
            </SecondaryButton>
            <PrimaryButton size="m" onClick={handleNext}>
              다음
            </PrimaryButton>
          </DiagnosisButton>
        </DiagnosisBox>
      )}
    </DiagnosisContainer>
  );
}
