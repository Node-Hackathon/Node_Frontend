import axios from 'axios';
import { CenterListType } from '../../pages/centerList/types';

// 특정 지역의 센터 정보를 가져오는 함수
export const centerListSearch = async (region = ''): Promise<CenterListType[]> => {
  try {
    const response = await axios.get(
      `/center-api/search${region ? '?region=' + encodeURIComponent(region) : ''}`,
      {
        headers: {
          // 실제 사용자 토큰 저장해서 받아와야함 지금은 하드코딩해버림
          'X-AUTH-TOKEN':
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwMTAtNTI3OC05MDgyIiwicm9sZXMiOlsiTUVNQkVSIl0sImlhdCI6MTcyMTg4MTk3NywiZXhwIjoxNzIxODg1NTc3fQ.WE-Bw7EjxRAczNNmo6lrpH8HRXDxhYclhti678DqE7Y',
        },
      },
    );
    console.log('센터 리스트 확인:', response.data);
    return response.data;
  } catch (error) {
    console.error('센터 정보를 가져오는데 실패했습니다.', error);
    return [];
  }
};

// 모든 센터 정보를 가져오는 함수
export const centerList = async (): Promise<CenterListType[]> => {
  try {
    const response = await axios.get('/center-api', {
      headers: {
        // 실제 사용자 토큰 저장해서 받아와야함 지금은 하드코딩해버림
        'X-AUTH-TOKEN':
          'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwMTAtNTI3OC05MDgyIiwicm9sZXMiOlsiTUVNQkVSIl0sImlhdCI6MTcyMTg4MTk3NywiZXhwIjoxNzIxODg1NTc3fQ.WE-Bw7EjxRAczNNmo6lrpH8HRXDxhYclhti678DqE7Y',
      },
    });
    console.log('전체 센터 리스트 확인:', response.data);
    return response.data;
  } catch (error) {
    console.error('전체 센터 정보를 가져오는데 실패했습니다.', error);
    return [];
  }
};
