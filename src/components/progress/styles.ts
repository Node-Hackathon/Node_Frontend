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

export const ProgressContainer = styled.div<{ type?: 'graph' | 'default' }>`
  width: ${({ type }) => (type === 'graph' ? '16.5rem' : '20rem')};
  height: ${({ type }) => (type === 'graph' ? '0.75rem' : '0.8125rem')};
  border-radius: ${({ type }) => (type === 'graph' ? '1.25rem' : '3.125rem')};
  background-color: ${theme.colors.textNormal};
`;

export const ProgressGradient = styled.div<{
  $width: number;
  $prevWidth: number;
  $isForward: boolean;
  type?: 'graph' | 'default';
}>`
  ${({ $prevWidth, $width, $isForward, type }) => css`
    width: ${$width}%;
    height: 100%;
    border-radius: ${type === 'graph' ? '1.25rem' : '3.125rem'};
    background: ${type === 'graph'
      ? 'linear-gradient(90deg, #30CAA1 0%, #30CA7D 100%)'
      : 'linear-gradient(90deg, #5fcf89 2.82%, #00b644 100%)'};
    animation: ${$isForward
        ? forwardAnimation($prevWidth, $width)
        : reverseAnimation($width, $prevWidth)}
      1s ease forwards;
  `}
`;
