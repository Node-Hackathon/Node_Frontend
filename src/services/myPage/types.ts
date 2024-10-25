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

export interface guardianInfoPageReturnType {
  guardian_name: string;
  guardian_phone_num: string;
  guardian_address: string;
}

export interface ImageUpdateType {
  profileImage: File | null;
}

export interface DiagnosisType {
  id: number;
  score: number;
  date: string;
  userId: number;
}

export interface BlockGameResult {
  id: number;
  imageUrl: string;
  createdAt: string;
}

export interface CompositionGameResult {
  id: number;
  imageUrl: string;
  createdAt: string;
}

export interface CardGameResult {
  id: number;
  stage: number;
  date: string;
  userId: number;
}

export interface NumberGameResult {
  id: number;
  stage: number;
  date: string;
  userId: number;
}
