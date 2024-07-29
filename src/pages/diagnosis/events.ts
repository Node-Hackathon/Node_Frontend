import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllDiagnosesQuery } from '../../services/diagnosis/diagnosisApi';
import {
  nextStep,
  setTotalSteps,
  prevStep,
  setCurrentStep,
  setStepReset,
} from '../../store/reducer/progressSlice';
import { resetAnswers, setAnswer, setCheckedValue } from '../../store/reducer/diagnosisSlice';
import { RootState } from '../../store/store';
import { closeModal, openModal } from '../../store/reducer/modalSlice';
import { useLocation, useNavigate } from 'react-router-dom';

export const useDiagnosis = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    prevStep: prevStepState,
    currentStep,
    totalSteps,
  } = useSelector((state: RootState) => state.progress);
  const { isOpen, question1, question2 } = useSelector((state: RootState) => state.modal);
  const checkedValues = useSelector((state: RootState) => state.diagnosis.checkedValues);

  const { data, isSuccess } = useGetAllDiagnosesQuery();

  useEffect(() => {
    if (data && data.length > 0) {
      dispatch(setTotalSteps(data.length));

      if (currentStep) {
        const nextUnansweredStep = findNextUnansweredStep();
        if (nextUnansweredStep !== 1) {
          dispatch(
            openModal({
              question1: '검사를 이어서',
              question2: '진행하시겠습니까?',
            }),
          );
        } else {
          dispatch(setCurrentStep(Number(currentStep)));
        }
      } else {
        dispatch(setStepReset());
      }
    }
  }, [dispatch, data]);

  const findNextUnansweredStep = () => {
    for (let i = 1; i <= (data?.length || 0); i++) {
      if (checkedValues[i] === undefined) {
        return i;
      }
    }
    return undefined;
  };

  const handleChange = (step: number, value: number) => {
    dispatch(setAnswer({ step, answer: value }));
    dispatch(setCheckedValue({ step, value }));
  };

  const handleNext = () => {
    if (checkedValues[currentStep] === undefined) {
      alert('질문에 대한 답변을 선택해주세요.');
      return;
    }
    if (currentStep === totalSteps) {
      const totalScore = Object.values(checkedValues).reduce((acc, value) => acc + value, 0);
      console.log(`총 점수: ${totalScore}`);
      dispatch(setStepReset());
      dispatch(resetAnswers());
      navigate(`result?score=${totalScore}`);
    } else {
      dispatch(nextStep());
    }
  };

  const handlePrev = () => {
    if (currentStep === 1) {
      alert('첫 번째 질문입니다.');
      return;
    }
    dispatch(prevStep());
  };

  const handleContinue = () => {
    const nextUnansweredStep = findNextUnansweredStep();
    if (nextUnansweredStep !== undefined) {
      dispatch(setCurrentStep(nextUnansweredStep));
    }
    dispatch(closeModal());
  };

  const handleRestart = () => {
    dispatch(setStepReset());
    dispatch(resetAnswers());
    dispatch(closeModal());
  };

  return {
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
  };
};

export const useDiagnosisResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isOpen, question1, question2 } = useSelector((state: RootState) => state.modal);

  const queryParams = new URLSearchParams(location.search);
  const score = parseInt(queryParams.get('score') || '0', 10);

  const handleRestart = () => {
    navigate('/diagnosis', { replace: true });
  };

  const handleConfirm = () => {
    if (score >= 7) {
      dispatch(
        openModal({
          question1: '전문 상담 센터를',
          question2: '보러 이동하시겠습니까?',
        }),
      );
    } else {
      navigate('/main', { replace: true });
    }
  };

  const handleModalNo = () => {
    navigate('/main', { replace: true });
    dispatch(closeModal());
  };

  const handleModalYes = () => {
    navigate('/center', { replace: true });
    dispatch(closeModal());
  };

  return {
    score,
    handleRestart,
    handleConfirm,
    isOpen,
    question1,
    question2,
    handleModalNo,
    handleModalYes,
  };
};
