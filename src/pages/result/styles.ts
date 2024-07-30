import styled from 'styled-components';
import { Body2 } from '../../components/text/Text';
import { theme } from '../../styles/theme';

export const ResultContainer = styled.section`
  width: 100%;
  min-height: calc(100% - 4rem);
  padding: 1.25rem 0;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

export const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResultTitle = styled.div`
  height: 15%;
  display: flex;
  flex-direction: column;
`;

export const ResultContent = styled.main`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const ResultGraphBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const ResultText = styled(Body2)`
  height: 20%;
  color: ${theme.colors.textNeutral};
  display: flex;
  align-items: center;
`;

export const ResultButton = styled.div`
  height: 20%;
  min-width: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GraphBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const Graph = styled.div`
  width: 0.875rem;
  height: 9.6875rem;
  border-radius: 0.625rem;
`;
