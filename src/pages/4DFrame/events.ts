import { useNavigate } from 'react-router-dom';

export const use4DFrame = () => {
  const navigate = useNavigate();

  const handleReplay = () => navigate(0);

  return { handleReplay };
};
