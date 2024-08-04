import { Container, GoToWriteDiary } from './styles';
import Sad from '../../assets/images/Sad.png';
import { Text } from '../userInfo/styles';
import { useDiaryListEvents } from './events';

export const NoExistDiaryList = () => {
  const { handleGoToWriteDiary } = useDiaryListEvents();

  return (
    <Container>
      <img src={Sad} />
      <br />
      <Text color="black" fontSize="20px" fontWeight="600">
        일기를 작성하지 않았어요
      </Text>
      <br />
      <GoToWriteDiary onClick={handleGoToWriteDiary}>일기 쓰러가기</GoToWriteDiary>
    </Container>
  );
};
