import { PrimaryButton } from '../../components/button/Button';
import Modal from '../../components/modal/Modal';
import ProgressBar from '../../components/progress/ProgressBar';
import { Body2, Label1, Title4 } from '../../components/text/Text';
import { theme } from '../../styles/theme';
import { questions, useDiary } from './events';
import {
  AlertBox,
  AlertContent,
  DiagnosisButton,
  ProgressBarBox,
  SurveyBox,
  SurveyContainer,
  SurveyContent,
  SurveyTitle,
} from './styles';
import SadLogo from '../../assets/images/Sad.png';
import Textarea from '../../components/textarea/Textarea';

export default function DiaryPage() {
  const {
    prevStepState,
    currentStep,
    totalSteps,
    handleBack,
    answerState,
    handleChangeAnswer,
    handleNext,
    error,
    isOpen,
    question1,
    question2,
    handleContinue,
    handleRestart,
    writtenData,
    isWrittenSuccess,
  } = useDiary();

  return (
    <>
      {isWrittenSuccess &&
        (writtenData?.status ? (
          <AlertBox>
            <AlertContent>
              <img src={SadLogo} />
              <Body2 color={theme.colors.textNeutral}>오늘은 이미 일기를 작성했어요</Body2>
            </AlertContent>
            <PrimaryButton size="m" onClick={handleBack}>
              일기 보기
            </PrimaryButton>
          </AlertBox>
        ) : (
          <SurveyContainer>
            <Modal
              isOpen={isOpen}
              question1={question1}
              question2={question2}
              onClickNo={handleRestart}
              onClickYes={handleContinue}
            />
            <SurveyBox>
              <SurveyContent>
                <SurveyTitle>
                  <Label1 color={theme.colors.primaryStrong}>질문 {currentStep}</Label1>
                  <Title4>{questions[currentStep - 1]?.diary_question}</Title4>
                </SurveyTitle>
                <ProgressBarBox>
                  <ProgressBar
                    currentStep={currentStep}
                    prevStep={prevStepState}
                    totalStep={totalSteps}
                    isForward={true}
                  />
                </ProgressBarBox>
                <div>
                  <Textarea
                    value={answerState}
                    onChange={handleChangeAnswer}
                    error={error}
                  ></Textarea>
                </div>
              </SurveyContent>
              <DiagnosisButton>
                <PrimaryButton size="l" onClick={handleNext}>
                  {currentStep === totalSteps ? '완료' : '다음'}
                </PrimaryButton>
              </DiagnosisButton>
            </SurveyBox>
          </SurveyContainer>
        ))}
    </>
  );
}
