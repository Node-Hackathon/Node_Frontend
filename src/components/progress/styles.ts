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

const gameAnimation = (height: number) => keyframes`
  0% {
    height: 0%;
  }
  100% {
    height: ${height}%;
  }
`;

export const ProgressContainer = styled.div<{ type?: 'graph' | 'default' | 'game' }>`
  width: ${({ type }) => (type === 'graph' ? '16.5rem' : '20rem')};
  height: ${({ type }) => (type === 'graph' ? '0.75rem' : '0.8125rem')};
  border-radius: ${({ type }) => (type === 'graph' ? '1.25rem' : '3.125rem')};
  background-color: ${theme.colors.textNormal};
`;

export const ProgressGradient = styled.div<{
  $width: number;
  $prevWidth: number;
  $isForward: boolean;
  type?: 'graph' | 'default' | 'game';
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
      1s ${type === 'graph' ? 'ease-in-out' : 'ease'} forwards;
  `}
`;

export const GameProgressGradient = styled.div<{
  $height: number;
}>`
  ${({ $height }) => css`
    height: ${$height}%;
    width: 0.875rem;
    border-radius: 0.625rem;
    margin: 1rem 0 0.25rem 0;
    background: linear-gradient(0deg, #30caa1 0%, #30ca7d 100%);
    animation: ${gameAnimation($height)} 1s ease-in-out forwards;
  `}
`;
