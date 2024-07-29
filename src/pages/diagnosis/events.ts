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

      if (currentStep) {
        const nextUnansweredStep = findNextUnansweredStep(); // 다음 미답변 질문 찾기
        if (nextUnansweredStep > 1) {
          // 미답변 질문이 있을 경우 모달 열기
          dispatch(
            openModal({
              question1: '검사를 이어서',
              question2: '진행하시겠습니까?',
            }),
          );
        } else {
          dispatch(setCurrentStep(Number(currentStep))); // 현재 스텝 설정
        }
      } else {
        dispatch(setStepReset()); // 초기화
      }
    }

    // 로컬에 저장된 체크된 값들 불러오기
    const storedValues = localStorage.getItem('checkedValues');
    if (storedValues) {
      const parsedValues = JSON.parse(storedValues);
      Object.entries(parsedValues).forEach(([step, value]) => {
        dispatch(setCheckedValue({ step: Number(step), value: Number(value) })); // 체크된 값 설정
      });
    }
  }, [dispatch, data]);

  // 다음 미답변 질문 찾기
  const findNextUnansweredStep = () => {
    return Object.keys(checkedValues).length + 1; // 체크된 값 개수 기반으로 다음 스텝 계산
  };

  // 체크박스 값 변경 처리
  const handleChange = (step: number, value: number) => {
    dispatch(setCheckedValue({ step, value }));
  };

  // 다음 질문으로 이동
  const handleNext = () => {
    if (checkedValues[currentStep] === undefined) {
      alert('질문에 대한 답변을 선택해주세요.'); ///답변 미선택 시
      return;
    }
    // 마지막 질문인 경우
    if (currentStep === totalSteps) {
      const totalScore = Object.values(checkedValues).reduce((acc, value) => acc + value, 0);
      console.log(`총 점수: ${totalScore}`);
      dispatch(setStepReset());
      dispatch(resetAnswers());
      navigate(`result?score=${totalScore}`); // 결과 페이지로 이동
    } else {
      dispatch(nextStep()); // 다음 스텝으로 이동
    }
  };

  // 이전 질문으로 이동
  const handlePrev = () => {
    if (currentStep > 1) {
      dispatch(prevStep());
    } else {
      alert('첫 번째 질문입니다.');
    }
  };

  // 모달에서 계속하기 버튼 처리
  const handleContinue = () => {
    const nextUnansweredStep = findNextUnansweredStep();
    if (nextUnansweredStep !== undefined) {
      dispatch(setCurrentStep(nextUnansweredStep));
    }
    dispatch(closeModal());
  };

  // 모달에서 재시작 버튼 처리
  const handleRestart = () => {
    dispatch(setStepReset());
    dispatch(resetAnswers());
    localStorage.removeItem('checkedValues');
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

  // URL 파라미터에서 점수 가져오기
  const queryParams = new URLSearchParams(location.search);
  const score = parseInt(queryParams.get('score') || '0', 10);

  // 재시작 처리
  const handleRestart = () => {
    navigate('/diagnosis', { replace: true });
  };

  // 결과 확인 처리
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

  // 모달 내 '아니오' 버튼
  const handleModalNo = () => {
    navigate('/main', { replace: true });
    dispatch(closeModal());
  };

  // 모달 내 '네' 버튼
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
