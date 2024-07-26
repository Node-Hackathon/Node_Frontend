import React, { useState, useEffect } from 'react';
import { centerList, centerListSearch } from '../../services/center/centerApi';
import {
  CenterListContainer,
  CenterListHeader,
  CenterListTitle,
  CenterList,
  CenterListItem,
  CenterName,
  CenterLocation,
  CenterPhone,
} from './styles';
import { CenterListType } from './types';
import { regions } from './regionsdata';
import Header from '../../components/header/Header';

export default function CenterListPage() {
  const [centers, setCenters] = useState<CenterListType[]>([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [isHambergerOpen, setIsHambergerOpen] = useState(false);

  const handleToggleHamberger = () => {
    setIsHambergerOpen(!isHambergerOpen);
  };

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
      <Header isHambergerOpen={isHambergerOpen} handleToggleHamberger={handleToggleHamberger} />
      <CenterListHeader>
        <CenterListTitle>상담 센터</CenterListTitle>
        <select onChange={(e) => setSelectedRegion(e.target.value)} value={selectedRegion}>
          <option value="">전체</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </CenterListHeader>
      <CenterList>
        {centers.map((center) => (
          <CenterListItem key={center.id}>
            <CenterName>{center.center_name}</CenterName>
            <CenterPhone>{center.center_phone_num}</CenterPhone>
            <CenterLocation>{center.center_address}</CenterLocation>
          </CenterListItem>
        ))}
      </CenterList>
    </CenterListContainer>
  );
}
