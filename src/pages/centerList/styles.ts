import styled from 'styled-components';

export const CenterListContainer = styled.div`
  height: 100%;
  padding: 10.63rem 0 5rem;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 5rem 0 2rem;
  }
`;

export const CenterListTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

export const CenterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

export const CenterListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f0f0f0; /* Replace with the actual color */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const CenterName = styled.span`
  font-weight: bold;
`;

export const CenterLocation = styled.span`
  color: #000000; /* Replace with the actual color */
`;

export const CenterPhone = styled.span`
  color: #000000; /* Replace with the actual color */
`;
export const CenterType = styled.span`
  color: #000000; /* Replace with the actual color */
`;
