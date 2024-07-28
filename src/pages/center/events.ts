import { useState } from 'react';
import {
  useFindCentersByRegionQuery,
  useGetAllCentersQuery,
} from '../../services/center/centerApi';

export const regions = [
  { value: '', label: '전체' },
  { value: '서울특별시', label: '서울특별시' },
  { value: '부산광역시', label: '부산광역시' },
  { value: '대구광역시', label: '대구광역시' },
  { value: '인천광역시', label: '인천광역시' },
  { value: '광주광역시', label: '광주광역시' },
  { value: '대전광역시', label: '대전광역시' },
  { value: '울산광역시', label: '울산광역시' },
  { value: '세종특별자치시', label: '세종특별자치시' },
  { value: '경기도', label: '경기도' },
  { value: '강원도', label: '강원도' },
  { value: '충청북도', label: '충청북도' },
  { value: '충청남도', label: '충청남도' },
  { value: '전라북도', label: '전라북도' },
  { value: '전라남도', label: '전라남도' },
  { value: '경상북도', label: '경상북도' },
  { value: '경상남도', label: '경상남도' },
  { value: '제주특별자치도', label: '제주특별자치도' },
];

export const useCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(regions[0]);

  // 전체 센터 데이터
  const { data: allCenters, isSuccess: isAllCentersSuccess } = useGetAllCentersQuery();

  // 선택된 지역의 센터 데이터 (전체가 아닐 때만 실행)
  const { data: centersByRegion, isSuccess: isCentersByRegionSuccess } =
    useFindCentersByRegionQuery(selectedOption.value, {
      skip: selectedOption.value === '',
    });

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (region: { value: string; label: string }) => {
    setSelectedOption(region);
    setIsOpen(false);
  };

  const data = selectedOption.value ? centersByRegion : allCenters;
  const isSuccess = selectedOption.value ? isCentersByRegionSuccess : isAllCentersSuccess;

  return {
    data,
    isSuccess,
    isOpen,
    selectedOption,
    handleSelectClick,
    handleSelect,
  };
};
