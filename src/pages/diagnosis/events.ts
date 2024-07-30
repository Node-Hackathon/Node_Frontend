import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllDiagnosesQuery } from '../../services/diagnosis/diagnosisApi';
import {
  nextStep,
  setTotalSteps,
  prevStep,
  setCurrentStep,
  setStepReset,
} from '../../store/reducer/progressSlice';
import { resetAnswers, setCheckedValue } from '../../store/reducer/diagnosisSlice';
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

  // API 호출
  const { data, isSuccess } = useGetAllDiagnosesQuery();

  useEffect(() => {
    if (data) {
      dispatch(setTotalSteps(data.length)); // 총 스텝 수 설정

      const nextUnansweredStep = findNextUnansweredStep(); // 다음 미답변 질문 찾기

      if (currentStep && nextUnansweredStep > 1) {
        // 미답변 질문이 있을 경우 모달 열기
        dispatch(
          openModal({
            question1: '검사를 이어서',
            question2: '진행하시겠습니까?',
          }),
        );
      } else {
        dispatch(setStepReset()); // 초기화
      }
    }
  }, [dispatch, data]);

  // 다음 미답변 질문 찾기
  const findNextUnansweredStep = useCallback(() => {
    return Object.keys(checkedValues).length + 1; // 체크된 값 개수 기반으로 다음 스텝 계산
  }, [checkedValues]);

  // 체크박스 값 변경 처리
  const handleChange = (step: number, value: number) => {
    dispatch(setCheckedValue({ step, value }));
  };

  // 다음 질문으로 이동
  const handleNext = useCallback(() => {
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
  }, [checkedValues, currentStep, totalSteps, dispatch, navigate]);

  // 이전 질문으로 이동
  const handlePrev = useCallback(() => {
    if (currentStep > 1) {
      dispatch(prevStep());
    } else {
      alert('첫 번째 질문입니다.');
    }
  }, [currentStep, dispatch]);

  // 모달에서 계속하기 버튼 처리
  const handleContinue = useCallback(() => {
    dispatch(setCurrentStep(findNextUnansweredStep()));
    dispatch(closeModal());
  }, [dispatch, findNextUnansweredStep]);

  // 모달에서 재시작 버튼 처리
  const handleRestart = useCallback(() => {
    dispatch(setStepReset());
    dispatch(resetAnswers());
    dispatch(closeModal());
  }, [dispatch]);

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

  // URL 파라미터에서 점수 가져오기
  const score = useMemo(
    () => parseInt(new URLSearchParams(location.search).get('score') || '0', 10),
    [location.search],
  );

  // 재시작 처리
  const handleRestart = useCallback(() => {
    navigate('/diagnosis', { replace: true });
  }, [navigate]);

  // 결과 확인 처리
  const handleConfirm = useCallback(() => {
    if (score >= 7) {
      dispatch(openModal({ question1: '전문 상담 센터를', question2: '보러 이동하시겠습니까?' }));
    } else {
      navigate('/main', { replace: true });
    }
  }, [score, dispatch, navigate]);

  // 모달 내 '아니오' 버튼
  const handleModalNo = useCallback(() => {
    navigate('/main', { replace: true });
    dispatch(closeModal());
  }, [dispatch, navigate]);

  // 모달 내 '네' 버튼
  const handleModalYes = useCallback(() => {
    navigate('/center', { replace: true });
    dispatch(closeModal());
  }, [dispatch, navigate]);

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
