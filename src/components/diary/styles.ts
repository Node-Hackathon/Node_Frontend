import styled from 'styled-components';
import { Body2 } from '../text/Text';
import { theme } from '../../styles/theme';

export const DiaryResultContainer = styled.section`
  height: auto;
  padding: 1.62rem 0;
  display: flex;
  justify-content: center;
`;

export const DiaryResultBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const DiaryResultList = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const DiaryResultListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
`;

export const DiaryResultQuestion = styled(Body2)`
  color: ${theme.colors.textNeutral};
  padding-left: 0.5rem;
`;

export const DiaryResultButton = styled.div`
  margin: 1.62rem 0;
`;
