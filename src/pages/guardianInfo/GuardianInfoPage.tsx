import {
  Container,
  Info,
  Name,
  Text,
  Profile,
  Table,
  TableRow,
  TableCell,
} from '../userInfo/styles';
import defaultProfile from '../../assets/images/DefaultProfile.png';
import { useGuardianInfoEvents } from './events';
import NotExistGuardianInfoPage from './NotExistGuardianInfoPage';

export default function GuardianInfoPage() {
  const { guardianObj, isGuardianExist } = useGuardianInfoEvents();

  // 보호자 정보가 없을 경우
  if (!isGuardianExist || !guardianObj) {
    return <NotExistGuardianInfoPage />;
  }

  // 보호자 정보가 있을 경우
  return (
    <Container>
      <Profile>
        <img src={defaultProfile} />
      </Profile>
      <Name>
        <Text fontSize="24px" fontWeight="700">
          {guardianObj.guardianName} 님
        </Text>
      </Name>
      <Info>
        <Table>
          <TableRow>
            <TableCell>전화번호</TableCell>
            <TableCell width="70%" color="black">
              {guardianObj.guardianPhone}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>주소</TableCell>
            <TableCell width="70%" color="black">
              {guardianObj.guardianAddress}
            </TableCell>
          </TableRow>
        </Table>
      </Info>
    </Container>
  );
}
