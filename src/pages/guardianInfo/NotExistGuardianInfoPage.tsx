import { AddGuardianBtn, Container } from './styles';
import { Text } from '../userInfo/styles';
import Sad from '../../assets/images/Sad.png';

export default function NotExistGuardianInfoPage() {
  return (
    <Container>
      <img src={Sad} />
      <br />
      <Text color="black" fontSize="20px" fontWeight="600">
        보호자 정보가 존재하지 않아요
      </Text>
      <br />
      <AddGuardianBtn>보호자 정보 추가하기</AddGuardianBtn>
    </Container>
  );
}
