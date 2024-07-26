import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';

export const useLanding = () => {
  const accessToken = useSelector((state: RootState) => state.token.accessToken);

  const navigate = useNavigate();

  const handleLandingTouch = () => {
    if (accessToken) {
      navigate('/main');
    } else {
      navigate('/signIn');
    }
  };

  return { handleLandingTouch };
};
