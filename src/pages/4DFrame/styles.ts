import { styled } from 'styled-components';
import { Body2 } from '../../components/text/Text';

export const UploadContainer = styled.section`
  height: 100%;
  width: 100%;
  min-height: 40rem;
  padding: 3.375rem 0;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

export const UploadBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const UploadManual = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

export const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 4;
`;

export const UploadContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 3;
`;

export const UploadTitle = styled(Body2)`
  max-width: 15.625rem;
  text-align: center;
  word-break: keep-all;
  white-space: normal;
`;

export const UploadButton = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
