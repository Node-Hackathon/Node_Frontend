import { Container, GoToCheckBtn } from './styles';
import { Text } from '../userInfo/styles';
import Sad from '../../assets/images/Sad.png';

export default function NoExistResult() {
  return (
    <Container>
      <img src={Sad} />
      <br />
      <Text color="black" fontSize="20px" fontWeight="600">
        치매 진단 결과가 존재하지 않아요
      </Text>
      <br />
      <GoToCheckBtn>치매 진단하러 가기</GoToCheckBtn>
    </Container>
  );
}
