import styled, { css, keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

const forwardAnimation = (fromWidth: number, toWidth: number) => keyframes`
  0% {
    width: ${fromWidth}%;
  }
  100% {
    width: ${toWidth}%;
  }
`;

const reverseAnimation = (fromWidth: number, toWidth: number) => keyframes`
  0% {
    width: ${toWidth}%;
  }
  100% {
    width: ${fromWidth}%;
  }
`;

export const ProgressContainer = styled.div`
  width: 20rem;
  height: 0.8125rem;
  border-radius: 3.125rem;
  background-color: ${theme.colors.textNormal};
`;

export const ProgressGradient = styled.div<{
  width: number;
  prevWidth: number;
  isForward: boolean;
}>`
  ${({ prevWidth, width, isForward }) => css`
    width: ${width}%;
    height: 100%;
    border-radius: 3.125rem;
    background: linear-gradient(90deg, #5fcf89 2.82%, #00b644 100%);
    animation: ${isForward
        ? forwardAnimation(prevWidth, width)
        : reverseAnimation(width, prevWidth)}
      2s ease forwards;
  `}
`;
