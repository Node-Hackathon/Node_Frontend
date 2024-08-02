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
import NotExistGuardianInfoPage from './NotExistGuardianInfoPage';
import guardianApi from '../../services/myPage/guardianApi';

export default function GuardianInfoPage() {
  // 보호자 정보 조회
  const { data: guardianData } = guardianApi.useGetGuardianInfoByIdQuery();
  console.log(guardianData);

  // 보호자 정보가 없을 경우
  if (
    !guardianData?.guardian_name &&
    !guardianData?.guardian_address &&
    !guardianData?.guardian_phone_num
  ) {
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
          {guardianData?.guardian_name} 님
        </Text>
      </Name>
      <Info>
        <Table>
          <TableRow>
            <TableCell>전화번호</TableCell>
            <TableCell width="70%" color="black">
              {guardianData?.guardian_phone_num}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>주소</TableCell>
            <TableCell width="70%" color="black">
              {guardianData?.guardian_address}
            </TableCell>
          </TableRow>
        </Table>
      </Info>
    </Container>
  );
}
