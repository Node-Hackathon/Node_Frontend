import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const EducationContainer = styled.section`
  width: 100%;
  height: calc(100% - 4rem);
  min-height: calc(100% - 4rem);
  padding: 1.25rem 0;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

export const EducationBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const EducationPair = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  justify-content: space-evenly;
`;

export const EducationLink = styled(Link)`
  display: flex;
  align-items: center;
  flex: 1;
`;
