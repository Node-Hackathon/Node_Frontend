import { useCallback, useEffect, useMemo, useState } from 'react';
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
import { useCreateSurveyMutation } from '../../services/survey/surveyApi';
import { SurveyType } from '../../services/survey/types';
import { AnswerType } from './types';
import { resetDiary, setAnswer } from '../../store/reducer/diarySlice';
import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import {
  useCreateDiaryMutation,
  useHasWrittenDiaryTodayQuery,
} from '../../services/diary/diaryApi';
import { DiaryFormType } from '../../services/diary/types';

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
  const [createSurvey] = useCreateSurveyMutation();

  useEffect(() => {
    if (data) {
      dispatch(setStepReset());
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
    for (let i = 1; i <= totalSteps; i++) {
      if (checkedValues[i] === undefined) {
        return i;
      }
    }
    return 14;
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
      handleSurveySubmit({ score: totalScore });
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
  const handleContinue = () => {
    dispatch(setCurrentStep(findNextUnansweredStep()));
    dispatch(closeModal());
  };

  // 모달에서 재시작 버튼 처리
  const handleRestart = () => {
    dispatch(setStepReset());
    dispatch(resetAnswers());
    dispatch(closeModal());
  };

  // 치매 진단 결과 서버에 전달
  const handleSurveySubmit = async (data: SurveyType) => {
    try {
      const response = await createSurvey(data).unwrap();
      const { score } = response;
      dispatch(setStepReset());
      dispatch(resetAnswers());
      navigate('result', { state: score });
    } catch (error) {
      console.error(error);
      alert('결과 전송에 실패했습니다.');
    }
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

  // URL에서 점수 가져오기
  const score = useMemo(() => location.state || 0, [location.state]);

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

export const questions: AnswerType[] = [
  { diary_question: '오늘 어떤 꿈을 꾸셨나요?', id: 1 },
  { diary_question: '오늘 날씨는 어땠나요?', id: 2 },
  { diary_question: '오늘 어떤 음식을 드셨나요?', id: 3 },
  { diary_question: '오늘 특별한 순간이 있었나요?', id: 4 },
  { diary_question: '오늘 하루는 어땠나요?', id: 5 },
];

export const useDiary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    prevStep: prevStepState,
    currentStep,
    totalSteps,
  } = useSelector((state: RootState) => state.progress);
  const { answers: localAnswers, expiration } = useSelector((state: RootState) => state.diary);
  const { isOpen, question1, question2 } = useSelector((state: RootState) => state.modal);

  const [answerState, setAnswerState] = useState('');
  const [error, setError] = useState(false);
  const [initialized, setInitialized] = useState(false);

  // API 호출
  const {
    data: writtenData,
    isSuccess: isWrittenSuccess,
    refetch,
  } = useHasWrittenDiaryTodayQuery();
  const [createDiary] = useCreateDiaryMutation();

  useEffect(() => {
    checkAndClearExpiredDiary(expiration, dispatch);

    dispatch(setStepReset());
    dispatch(setTotalSteps(questions.length)); // 총 스텝 수 설정

    const nextUnansweredStep = findNextUnansweredStep();
    if (!initialized && currentStep && nextUnansweredStep > 1) {
      dispatch(
        openModal({
          question1: '일기를 이어서',
          question2: '작성하시겠습니까?',
        }),
      );
      setInitialized(true);
    } else {
      dispatch(resetDiary());
      setInitialized(true);
    }
  }, [dispatch, expiration]);

  useEffect(() => {
    // 페이지 로드 시 로컬 스토리지에서 답변을 가져옴
    const savedAnswer = localAnswers[currentStep] || '';
    setAnswerState(savedAnswer);
  }, [currentStep, localAnswers]);

  // 오늘 일기 작성 완료 시 결과 페이지로 이동
  const handleBack = () => {
    navigate('/diaryResult');
  };

  // 텍스트 입력 핸들러 처리
  const handleChangeAnswer = (e: any) => {
    setAnswerState(e.target.value);
    setError(false);
    dispatch(setAnswer({ step: currentStep, answer: e.target.value }));
  };

  // 다음 미답변 질문 찾기
  const findNextUnansweredStep = useCallback(() => {
    for (let i = 1; i <= totalSteps; i++) {
      if (!localAnswers[i]) {
        return i;
      }
    }
    return questions.length;
  }, [localAnswers, totalSteps]);

  // 다음 질문으로 이동
  const handleNext = useCallback(() => {
    if (answerState === '') {
      setError(true);
      alert('질문에 대한 답변을 작성해주세요.');
      return;
    }

    if (currentStep === totalSteps) {
      const formattedData: DiaryFormType = {
        answer1: localAnswers[1] || '',
        answer2: localAnswers[2] || '',
        answer3: localAnswers[3] || '',
        answer4: localAnswers[4] || '',
        answer5: localAnswers[5] || '',
      };
      handleSubmitAnswer(formattedData);
    } else {
      dispatch(nextStep());
    }

    dispatch(setAnswer({ step: currentStep, answer: answerState }));
    setAnswerState('');
  }, [localAnswers, currentStep, totalSteps, dispatch]);

  // 모달에서 계속하기 버튼 처리
  const handleContinue = () => {
    dispatch(setCurrentStep(findNextUnansweredStep()));
    dispatch(closeModal());
  };

  // 모달에서 재시작 버튼 처리
  const handleRestart = () => {
    dispatch(setStepReset());
    dispatch(resetDiary());
    dispatch(closeModal());
  };

  const handleGoHome = () => {
    navigate('/main', { replace: true });
  };

  const handleGoResult = () => {
    navigate('/mypage/diaryResult', { replace: true });
  };

  const handleSubmitAnswer = async (data: DiaryFormType) => {
    try {
      await createDiary(data).unwrap();
      dispatch(setStepReset());
      dispatch(resetDiary());
      refetch();
      navigate('result', { replace: true });
    } catch (error) {
      console.error(error);
      alert('결과 전송에 실패했습니다.');
    }
  };

  return {
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
    handleGoHome,
    handleGoResult,
  };
};

// 만료 시간 체크 및 자정에 데이터 초기화 함수
const checkAndClearExpiredDiary = (expiration: number, dispatch: Dispatch<UnknownAction>) => {
  const now = Date.now();

  if (now >= expiration) {
    dispatch(resetDiary());
  }

  const timeUntilMidnight = expiration - now;
  if (timeUntilMidnight > 0) {
    setTimeout(() => {
      dispatch(resetDiary());
    }, timeUntilMidnight);
  }
};
