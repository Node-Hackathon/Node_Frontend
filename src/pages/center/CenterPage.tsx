import CenterList from './CenterList';
import {
  CenterBox,
  CenterContainer,
  CenterListBox,
  CenterTitle,
  CenterTop,
  SelectContainer,
  SelectOption,
  OptionsList,
  OptionItem,
} from './styles';
import { regions, useCenter } from './events';
import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';

export default function CenterPage() {
  const { data, isSuccess, selectedOption, isOpen, handleSelectClick, handleSelect } = useCenter();

  return (
    <CenterContainer>
      <CenterBox>
        <CenterTop>
          <CenterTitle>상담 센터</CenterTitle>
          <SelectContainer>
            <SelectOption onClick={handleSelectClick}>
              {selectedOption.label}
              {isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </SelectOption>
            {isOpen && (
              <OptionsList>
                {regions.map((region) => (
                  <OptionItem key={region.value} onClick={() => handleSelect(region)}>
                    {region.label}
                  </OptionItem>
                ))}
              </OptionsList>
            )}
          </SelectContainer>
        </CenterTop>
        {isSuccess ? (
          <CenterListBox>
            {data?.map((center) => <CenterList key={center.id} center={center} />)}
          </CenterListBox>
        ) : null}
      </CenterBox>
    </CenterContainer>
  );
}
