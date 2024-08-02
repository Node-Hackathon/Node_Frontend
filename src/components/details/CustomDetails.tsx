import { FaAngleDown } from 'react-icons/fa6';
import { Welcome, Text } from '../../pages/mypage/styles';
import { Container, Details, List, Summary } from './styles';
import { DiagnosisType } from '../../services/myPage/types';
import { useState } from 'react';
import NoExistResult from '../../pages/diagnosisTotalReslut/NoExistResult';

interface CustomDetailsProps {
  Diagnosis: DiagnosisType[];
}

export const CustomDetails = ({ Diagnosis }: CustomDetailsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (Diagnosis.length === 0) {
    return <NoExistResult />;
  }

  return (
    <Container>
      <Welcome>
        <Text color="black" fontSize="24px" fontWeight="700" marginLeft="0px">
          치매 진단 결과
        </Text>
      </Welcome>
      {Diagnosis.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === Diagnosis.length - 1;
        const handleToggle = () => {
          if (isLast) {
            setIsOpen((prevState) => !prevState);
          }
        };
        return (
          <Details key={item.id} isFirst={isFirst} isLast={isLast} isOpen={isOpen}>
            <Summary onClick={handleToggle}>
              <div>
                <span style={{ color: '#5d5d5d' }}>날짜: </span>
                <span>{item.date}</span>
              </div>
              <FaAngleDown />
            </Summary>
            <List>
              {item.score >= 7 ? (
                <>
                  치매가 의심됩니다!
                  <br />
                  병원에 방문하셔서
                  <br />
                  정밀 검사를 받아 보시는 걸 추천드려요.
                </>
              ) : (
                <>
                  축하합니다!
                  <br />
                  정상입니다.
                </>
              )}
            </List>
          </Details>
        );
      })}
    </Container>
  );
};
