import styled from 'styled-components';
import { Body2 } from '../../components/text/Text';
import { theme } from '../../styles/theme';

export const ManualContainer = styled.section`
  width: 100%;
  height: calc(100% - 4rem);
  min-height: calc(100% - 4rem);
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

export const ManualBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ManualTitle = styled(Body2)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.textNeutral};
  flex: 1;
`;

export const ManualContent = styled.main`
  display: grid;
  place-items: center;
  align-items: flex-start;
  flex: 4;
`;

export const ManualGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2.5rem 1.25rem;
`;
