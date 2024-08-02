import { Container, GoToCheckBtn } from './styles';
import { Text } from '../userInfo/styles';
import Sad from '../../assets/images/Sad.png';
import { useTotalReslutEvents } from './events';

export default function NoExistResult() {
  const { handleGoToCheck } = useTotalReslutEvents();

  return (
    <Container>
      <img src={Sad} />
      <br />
      <Text color="black" fontSize="20px" fontWeight="600">
        치매 진단 결과가 존재하지 않아요
      </Text>
      <br />
      <GoToCheckBtn onClick={handleGoToCheck}>치매 진단하러 가기</GoToCheckBtn>
    </Container>
  );
}
