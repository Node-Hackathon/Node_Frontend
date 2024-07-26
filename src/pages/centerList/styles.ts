import styled from 'styled-components';
import { Label8, Title1, Title3 } from '../../components/text/Text';

export const CenterListContainer = styled.section`
  height: 100%;
  width: 100%;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`;

export const CenterListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const CenterListTitle = styled(Title1)`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  align-items: center;
  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

export const CenterList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.25rem;
  align-items: flex-start;
  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

export const CenterListItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
  border: 1px solid #d9d9d9;
`;

export const CenterName = styled(Title3)`
  white-space: normal;
`;

export const CenterLocation = styled(Label8)`
  white-space: normal;
`;

export const CenterPhone = styled(Label8)`
  white-space: normal;
`;
