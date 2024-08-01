export interface myPageReturnType {
  address: string; // 주소
  birth: string; // 생일
  gender: string; // 성별
  guardian_name: string; // 보호자 이름
  height: number; // 키
  name: string; // 이름
  phoneNum: string; // 전화번호
  profile_image_url: string; // 프로필 이미지 URL
  weight: number; // 몸무게
}

export interface guardianInfoPageRefurnType {
  guardian_name: string;
  guardian_phone_num: string;
  guardian_address: string;
}
