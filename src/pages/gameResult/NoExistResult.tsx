import { Container } from '../guardianInfo/styles';
import { Text } from '../userInfo/styles';
import Sad from '../../assets/images/Sad.png';

export const NoExistResult = () => {
  return (
    <Container>
      <img src={Sad} />
      <br />
      <Text color="black" fontSize="20px" fontWeight="600">
        게임 결과가 존재하지 않아요
      </Text>
    </Container>
  );
};
