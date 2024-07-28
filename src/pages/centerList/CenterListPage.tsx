import React, { useState, useEffect } from 'react';
import { centerList, centerListSearch } from '../../services/center/centerApi';
import {
  CenterListContainer,
  CenterListTitle,
  CenterList,
  CenterListItem,
  CenterName,
  CenterLocation,
  CenterPhone,
  CenterType,
} from './styles';
import { CenterListType } from './types';
import { regions } from './regionsdata';

export default function CenterListPage() {
  const [centers, setCenters] = useState<CenterListType[]>([]);
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = selectedRegion ? await centerListSearch(selectedRegion) : await centerList();
        setCenters(data);
      } catch (error) {
        console.error('센터 정보를 가져오는데 실패했습니다.', error);
      }
    };
    fetchData();
  }, [selectedRegion]);
  return (
    <CenterListContainer>
      <CenterListTitle>센터 목록</CenterListTitle>
      <select onChange={(e) => setSelectedRegion(e.target.value)} value={selectedRegion}>
        <option value="">전체</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      <CenterList>
        {centers.map((center) => (
          <CenterListItem key={center.id}>
            <CenterName>{center.center_name}</CenterName>
            <CenterLocation>{center.center_address}</CenterLocation>
            <CenterPhone>전화번호: {center.center_phone_num}</CenterPhone>
            <CenterType>센터 유형: {center.center_type}</CenterType>
          </CenterListItem>
        ))}
      </CenterList>
    </CenterListContainer>
  );
}
