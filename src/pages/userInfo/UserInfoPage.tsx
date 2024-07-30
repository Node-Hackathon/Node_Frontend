import {
  Container,
  Info,
  Name,
  Profile,
  Text,
  AddProfile,
  Table,
  TableRow,
  TableCell,
  EditBtn,
} from './styles';
import defaultProfile from '../../assets/images/DefaultProfile.png';

export default function UserInfoPage() {
  return (
    <Container>
      <Profile>
        <img src={defaultProfile} />
        <AddProfile
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="12" fill="#30CA7D" />
          <path d="M6 12H18" stroke="white" strokeWidth="3" />
          <path d="M12 18L12 6" stroke="white" strokeWidth="3" />
        </AddProfile>
      </Profile>
      <Name>
        <Text fontSize="24px" fontWeight="700">
          김유성 님
        </Text>
        <Text fontWeight="400" color="8A8A8A">
          보호자 ∙ 이민욱님
        </Text>
      </Name>
      <Info>
        <Table>
          <TableRow>
            <TableCell>성별</TableCell>
            <TableCell width="70%" color="black">
              남성
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>나이</TableCell>
            <TableCell width="70%" color="black">
              만 25세
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>키</TableCell>
            <TableCell width="70%" color="black">
              170cm
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>몸무게</TableCell>
            <TableCell width="70%" color="black">
              70kg
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>전화번호</TableCell>
            <TableCell width="70%" color="black">
              010-3333-3333
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>주소</TableCell>
            <TableCell width="70%" color="black">
              경기도 성남시 수정구 시민로 164번길 2
            </TableCell>
          </TableRow>
        </Table>
      </Info>
      <EditBtn>수정하기</EditBtn>
    </Container>
  );
}
