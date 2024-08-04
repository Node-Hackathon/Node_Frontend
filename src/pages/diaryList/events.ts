import { useNavigate } from 'react-router-dom';

export const useDiaryListEvents = () => {
  const navigate = useNavigate();

  const handleGoToWriteDiary = () => {
    navigate('/diary');
  };

  return { handleGoToWriteDiary };
};
