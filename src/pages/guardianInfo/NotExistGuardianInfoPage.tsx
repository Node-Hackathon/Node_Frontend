import { AddGuardianBtn, Container } from './styles';
import { Text } from '../userInfo/styles';
import Sad from '../../assets/images/Sad.png';
import { useNavigate } from 'react-router-dom';

export default function NotExistGuardianInfoPage() {
  const navigate = useNavigate();

  const handleGoToGuardian = () => {
    navigate('/mypage/guardianInfo/update');
  };

  return (
    <Container>
      <img src={Sad} />
      <br />
      <Text color="black" fontSize="20px" fontWeight="600">
        보호자 정보가 존재하지 않아요
      </Text>
      <br />
      <AddGuardianBtn onClick={handleGoToGuardian}>보호자 정보 추가하기</AddGuardianBtn>
    </Container>
  );
}
