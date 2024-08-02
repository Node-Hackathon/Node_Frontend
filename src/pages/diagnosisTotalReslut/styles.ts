import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100% - 4rem);
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const GoToCheckBtn = styled.div`
  width: fit-content;
  height: fit-content;

  padding: 1rem 1rem;

  background-color: #5fcf89;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
`;
