import React from 'react';
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
  Input,
} from './styles';
import defaultProfile from '../../assets/images/DefaultProfile.png';
import myPageApi from '../../services/myPage/myPageApi';
import { useUserInfoEvents } from './events';
import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-modal';

export default function UserInfoPage() {
  // 유저 정보 조회
  const { data: userData, refetch } = myPageApi.useGetUserByIdQuery();

  // 유저 정보 수정
  const [updateUser] = myPageApi.useUpdateUserMutation();

  // 만 나이 계산 로직
  const { handleCalcAge } = useUserInfoEvents();

  // 수정 모드 상태
  const [isEditMode, setIsEditMode] = useState(false);

  // 우편번호 입력창 show & hide
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);

  // 수정한 키, 몸무게, 전화번호, 주소 상태
  const [newHeight, setNewHeight] = useState(userData?.height || '');
  const [newWeight, setNewWeight] = useState(userData?.weight || '');
  const [newPhoneNum, setNewPhoneNum] = useState(userData?.phoneNum || '');
  const [newAddress, setNewAddress] = useState(userData?.address || '');

  // 수정 모드 토글
  const toggleEditMode = async () => {
    if (isEditMode) {
      // 수정 모드 종료 시 업데이트 API 호출
      const updatedData = {
        ...userData,
        height: Number(newHeight),
        weight: Number(newWeight),
        phoneNum: newPhoneNum,
        address: newAddress,
      };

      try {
        await updateUser(updatedData).unwrap();
        console.log('수정된 정보:', updatedData);

        // 유저 정보 새로고침
        await refetch();
      } catch (error) {
        console.error('업데이트 실패:', error);
      }
    }
    setIsEditMode(!isEditMode);
  };

  // 주소 입력창 클릭 시
  const handleOutputLog = () => {
    setIsPostcodeOpen(true);
  };

  // 주소 검색 선택 시
  const handleAddressComplete = (data: { address: any }) => {
    const addr = data.address;
    setNewAddress(addr);
    setIsPostcodeOpen(false);
  };

  // 유효성 검사 함수
  const handleValidateHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, 3); // 숫자만 허용
    setNewHeight(numericValue);
  };

  const handleValidateWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, 3); // 숫자만 허용
    setNewWeight(numericValue);
  };

  const handleValidatePhoneNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9-]/g, '').slice(0, 15); // 숫자만 허용
    setNewPhoneNum(numericValue);
  };

  return (
    <Container>
      <Profile>
        <img
          src={userData?.profile_image_url || defaultProfile}
          alt="Profile"
          style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }}
        />
        {isEditMode ? (
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
        ) : (
          <></>
        )}
      </Profile>
      <Name>
        <Text fontSize="24px" fontWeight="700">
          {userData?.name} 님
        </Text>
        <Text fontWeight="400" color="8A8A8A">
          보호자 ∙ {userData?.guardian_name}님
        </Text>
      </Name>
      <Info>
        <Table>
          <TableRow>
            <TableCell>성별</TableCell>
            <TableCell width="70%" color="black">
              {userData?.gender}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>나이</TableCell>
            <TableCell width="70%" color="black">
              만 {userData ? handleCalcAge(userData?.birth) : ''}세
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>키</TableCell>
            <TableCell width="70%" color="black">
              {isEditMode ? (
                <Input
                  value={newHeight}
                  onChange={handleValidateHeight}
                  placeholder="키를 입력하세요"
                />
              ) : (
                `${userData?.height}cm`
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>몸무게</TableCell>
            <TableCell width="70%" color="black">
              {isEditMode ? (
                <Input
                  value={newWeight}
                  onChange={handleValidateWeight}
                  placeholder="몸무게를 입력하세요"
                />
              ) : (
                `${userData?.weight}kg`
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>전화번호</TableCell>
            <TableCell width="70%" color="black">
              {isEditMode ? (
                <Input
                  value={newPhoneNum}
                  onChange={handleValidatePhoneNum}
                  placeholder="전화번호를 입력하세요"
                />
              ) : (
                userData?.phoneNum
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>주소</TableCell>
            <TableCell width="70%" color="black">
              {isEditMode ? (
                <Input
                  value={newAddress}
                  onClick={handleOutputLog}
                  placeholder="주소를 입력하세요"
                />
              ) : (
                userData?.address
              )}
            </TableCell>
          </TableRow>
        </Table>
        <Modal
          isOpen={isPostcodeOpen}
          onRequestClose={() => setIsPostcodeOpen(false)}
          style={{
            content: {
              width: '95%',
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
            },
          }}
        >
          <DaumPostcode onComplete={handleAddressComplete} />
        </Modal>
      </Info>
      <EditBtn onClick={toggleEditMode}>{isEditMode ? '저장하기' : '수정하기'}</EditBtn>
    </Container>
  );
}
