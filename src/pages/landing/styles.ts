import styled, { keyframes } from 'styled-components';
import { Body2 } from '../../components/text/Text';

const fadeInOut = keyframes`
  0%,100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

export const LandingContainer = styled.div`
  height: 100%;
  padding: 10.63rem 0 5rem;
  overflow-x: hidden;
  cursor: pointer;
  animation: ${fadeIn} 2s ease-in-out;
`;

export const LandingBox = styled.div`
  height: 100%;
  min-height: 22.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const LandingTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.63rem;
`;

export const LandingTouch = styled(Body2)`
  animation: ${fadeInOut} 3s infinite ease-in-out;
`;
