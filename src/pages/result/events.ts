import { useNavigate } from 'react-router-dom';

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')}`;
}

export const useResult = () => {
  const navigate = useNavigate();

  const handleReplay = () => {
    navigate(-1);
  };

  const handleGoResult = () => {
    navigate('/mypage/gameResult');
  };

  return { handleReplay, handleGoResult };
};
