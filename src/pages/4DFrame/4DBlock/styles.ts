import { keyframes, styled } from 'styled-components';
import { Body2 } from '../../../components/text/Text';
import { theme } from '../../../styles/theme';

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
  width: 100%;
  min-height: 100%;
  padding: 3.375rem 0 1.6875rem;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

export const UploadBox = styled.div`
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

export const UploadContent = styled.main`
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
  animation: ${loadingZoom} 2s ease-in-out infinite;
`;

export const LoadingSVG = styled.svg`
  transform-origin: center;
  animation: ${loadingRotate} 2s linear infinite;
`;

export const ResultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

export const ResultBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 6;
`;

export const ResultButton = styled.div`
  min-width: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1;
`;

export const ResultContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex: 1.5;
`;

export const ResultGraphBox = styled.div`
  max-height: 50%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.87rem;
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

export const ResultGraph = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.31rem;
`;

export const ResultValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.44rem 0 0.25rem;
`;
