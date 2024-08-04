import { useLocation, useNavigate } from 'react-router-dom';

export const useDiaryResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const diaryData = location.state;

  if (!diaryData) {
    return {
      answers: [],
      year: '',
      month: '',
      day: '',
    };
  }
  const { date, answer1, answer2, answer3, answer4, answer5 } = diaryData;
  const [year, month, day] = date.split('-');
  const answers = [answer1, answer2, answer3, answer4, answer5];

  const handleNavigate = () => {
    navigate('/main', { replace: true });
  };

  return {
    answers,
    year,
    month,
    day,
    handleNavigate,
  };
};
