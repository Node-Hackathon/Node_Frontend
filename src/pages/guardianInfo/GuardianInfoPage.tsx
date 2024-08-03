import React, { useState, useEffect } from 'react';
import {
  Container,
  Info,
  Name,
  Text,
  Profile,
  Table,
  TableRow,
  TableCell,
  EditBtn,
  Input,
} from '../userInfo/styles';
import defaultProfile from '../../assets/images/DefaultProfile.png';
import NotExistGuardianInfoPage from './NotExistGuardianInfoPage';
import guardianApi, { useUpdateGuardianInfoMutation } from '../../services/myPage/guardianApi';
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-modal';

export default function GuardianInfoPage() {
  // 보호자 정보 조회
  const { data: guardianData, refetch } = guardianApi.useGetGuardianInfoByIdQuery();
  const [updateGuardianInfo] = useUpdateGuardianInfoMutation();

  // 수정 모드 상태
  const [isEditMode, setIsEditMode] = useState(false);

  // 수정할 이름, 전화번호, 주소 상태 관리
  const [newName, setNewName] = useState('');
  const [newPhoneNum, setNewPhoneNum] = useState('');
  const [newAddress, setNewAddress] = useState('');

  // 우편번호 입력창 show & hide
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);

  // 보호자 정보가 있을 경우 초기값 설정
  useEffect(() => {
    if (guardianData) {
      setNewName(guardianData?.guardian_name || '');
      setNewPhoneNum(guardianData?.guardian_phone_num || '');
      setNewAddress(guardianData?.guardian_address || '');
    }
  }, [guardianData]);

  // 보기 모드 <-> 수정 모드
  const toggleEditMode = async () => {
    if (isEditMode) {
      try {
        await updateGuardianInfo({
          guardian_name: newName,
          guardian_address: newAddress,
          guardian_phone_num: newPhoneNum,
        }).unwrap();
        await refetch();
      } catch (error) {
        console.error('업데이트 실패:', error);
      }
    }
    setIsEditMode(!isEditMode);
  };

  // 이름 유효성 검사 후 상태 저장
  const handleValidateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const koreanOnlyValue = value.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣]/g, ''); // 한글만 허용
    setNewName(koreanOnlyValue);
  };

  // 전화번호 유효성 검사 후 상태 저장
  const handleValidatePhoneNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9-]/g, '').slice(0, 15); // 숫자만 허용
    setNewPhoneNum(numericValue);
  };

  // 주소 입력창 클릭 시
  const handleOpenPostCode = () => {
    setIsPostcodeOpen(true);
  };

  // 주소 검색 선택 시
  const handleAddressComplete = (data: { address: any }) => {
    const addr = data.address;
    setNewAddress(addr);
    setIsPostcodeOpen(false);
  };

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
        <img
          src={defaultProfile}
          style={{
            width: '100px',
            height: '100px',
            objectFit: 'cover',
            borderRadius: '50%',
            border: '1px solid gray',
          }}
        />
      </Profile>
      <Name>
        <Text fontSize="24px" fontWeight="700">
          {isEditMode ? (
            <Input placeholder="이름을 입력하세요" value={newName} onChange={handleValidateName} />
          ) : (
            guardianData?.guardian_name + ' 님'
          )}
        </Text>
      </Name>
      <Info>
        <Table>
          <tbody>
            <TableRow>
              <TableCell>전화번호</TableCell>
              <TableCell width="70%" color="black">
                {isEditMode ? (
                  <Input
                    placeholder="전화번호를 입력하세요"
                    value={newPhoneNum}
                    onChange={handleValidatePhoneNum}
                  />
                ) : (
                  guardianData?.guardian_phone_num
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>주소</TableCell>
              <TableCell width="70%" color="black">
                {isEditMode ? (
                  <Input
                    placeholder="주소를 입력하세요"
                    value={newAddress}
                    onClick={handleOpenPostCode}
                  />
                ) : (
                  guardianData?.guardian_address
                )}
              </TableCell>
            </TableRow>
          </tbody>
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
