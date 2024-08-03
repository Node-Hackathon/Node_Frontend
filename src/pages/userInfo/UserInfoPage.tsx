import React, { useState, useEffect, useRef } from 'react';
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
import myPageApi from '../../services/myPage/myPageApi';
import { useUserInfoEvents } from './events';
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-modal';

export default function UserInfoPage() {
  const { data: userData, refetch } = myPageApi.useGetUserByIdQuery();
  const [updateUser] = myPageApi.useUpdateUserMutation();
  const [updateImage] = myPageApi.useUpdateImageMutation();
  const { handleCalcAge } = useUserInfoEvents();

  const [isEditMode, setIsEditMode] = useState(false);
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);

  const [newHeight, setNewHeight] = useState(0);
  const [newWeight, setNewWeight] = useState(0);
  const [newAddress, setNewAddress] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [profileFile, setProfileFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (userData) {
      setNewHeight(userData.height || 0);
      setNewWeight(userData.weight || 0);
      setNewAddress(userData.address || '');
      setProfileImage(userData.profile_image_url || '');
    }
  }, [userData]);

  const toggleEditMode = async () => {
    if (isEditMode) {
      const updatedData = {
        ...userData,
        height: Number(newHeight),
        weight: Number(newWeight),
        address: newAddress,
      };

      try {
        await updateUser(updatedData).unwrap();
        console.log('수정된 정보:', updatedData);

        if (profileFile) {
          const formData = new FormData();
          formData.append('profileImage', profileFile);

          await updateImage(formData).unwrap();
        }
      } catch (error) {
        console.error('업데이트 실패:', error);
      }
      await refetch();
    }
    setIsEditMode(!isEditMode);
  };

  const handleOutputLog = () => {
    setIsPostcodeOpen(true);
  };

  const handleAddressComplete = (data: { address: any }) => {
    const addr = data.address;
    setNewAddress(addr);
    setIsPostcodeOpen(false);
  };

  const handleValidateHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, 3);
    setNewHeight(Number(numericValue));
  };

  const handleValidateWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, 3);
    setNewWeight(Number(numericValue));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setProfileImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Container>
      <Profile>
        <img
          src={profileImage}
          alt="Profile"
          style={{
            width: '100px',
            height: '100px',
            objectFit: 'cover',
            borderRadius: '50%',
            border: '1px solid gray',
          }}
          onClick={handleProfileClick}
        />
        {isEditMode ? (
          <>
            <AddProfile
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              style={{ cursor: 'pointer' }}
              onClick={handleProfileClick}
            >
              <circle cx="12" cy="12" r="12" fill="#30CA7D" />
              <path d="M6 12H18" stroke="white" strokeWidth="3" />
              <path d="M12 18L12 6" stroke="white" strokeWidth="3" />
            </AddProfile>
            <input
              type="file"
              style={{ display: 'none' }}
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
            />
          </>
        ) : null}
      </Profile>
      <Name>
        <Text fontSize="24px" fontWeight="700">
          {userData?.name} 님
        </Text>
        <Text fontWeight="400" color="8A8A8A">
          {userData?.guardian_name && <>보호자 ∙ {userData?.guardian_name}님</>}
        </Text>
      </Name>
      <Info>
        <Table>
          <tbody>
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
            <TableCell>전화번호</TableCell>
            <TableCell width="70%" color="black">
              {userData?.phoneNum}
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
