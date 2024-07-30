import styled from 'styled-components';

export const ResultContainer = styled.section`
  width: 100%;
  min-height: calc(100% - 4rem);
  padding: 1.25rem 0;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

export const ResultBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ResultTitle = styled.div`
  min-width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

export const ResultContent = styled.main`
  flex: 3;
`;

export const ResultButton = styled.div`
  min-width: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const GraphBox = styled.div``;
