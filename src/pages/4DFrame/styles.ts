import { styled } from 'styled-components';
import { Body2 } from '../../components/text/Text';
import { theme } from '../../styles/theme';

export const FDContainer = styled.section`
  width: 100%;
  min-height: calc(100% - 4.25rem);
  padding: 1.25rem 0;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

export const FDBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FDManual = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 0.5;
`;

export const FDContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 3;
`;

export const FDTitle = styled(Body2)`
  max-width: 15.625rem;
  text-align: center;
  word-break: keep-all;
  white-space: normal;
`;

export const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 4;
`;

export const UploadButton = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const ResultImage = styled.img`
  width: 15.625rem;
  height: 15.625rem;
  border-radius: 0.5rem;
  border: 1px solid ${theme.colors.textNormal};
  background-color: ${theme.colors.backgroundNormal};
  object-fit: contain;
`;
