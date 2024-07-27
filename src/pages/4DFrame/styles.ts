import { keyframes, styled } from 'styled-components';
import { Body2 } from '../../components/text/Text';

const loadingRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const loadingZoom = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const BlockContainer = styled.section`
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

export const LoadingContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingBox = styled.div`
  width: 10rem;
  height: 10rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingLogo = styled.div`
  position: absolute;
  top: 40%;
  left: 28%;
  display: flex;
  align-items: center;
  animation: ${loadingZoom} 3s ease-in-out infinite;
`;

export const LoadingSVG = styled.svg`
  transform-origin: center;
  animation: ${loadingRotate} 2s linear infinite;
`;
