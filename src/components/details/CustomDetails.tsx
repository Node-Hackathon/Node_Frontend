import { FaAngleDown } from 'react-icons/fa6';
import { Welcome, Text } from '../../pages/mypage/styles';
import { Container, Details, List, Summary } from './styles';
import { CustomDetailsType } from './types';
import { useState } from 'react';

export const CustomDetails = ({ Diagnosis }: CustomDetailsType) => {
  const checks = Object.keys(Diagnosis);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Welcome>
        <Text color="black" fontSize="24px" fontWeight="700" marginLeft="0px">
          치매 진단 결과
        </Text>
      </Welcome>
      {checks.map((key, index) => {
        const isFirst = index === 0;
        const isLast = index === checks.length - 1;
        const handleToggle = () => {
          if (isLast) {
            setIsOpen((prevState) => !prevState);
          }
        };
        return (
          <Details key={key} isFirst={isFirst} isLast={isLast} isOpen={isOpen}>
            <Summary onClick={handleToggle}>
              <div>
                <span style={{ color: '#5d5d5d' }}>날짜: </span>
                <span>{Diagnosis[key as keyof typeof Diagnosis].date}</span>
              </div>
              <FaAngleDown />
            </Summary>
            <List>{Diagnosis[key as keyof typeof Diagnosis].result}</List>
          </Details>
        );
      })}
    </Container>
  );
};
