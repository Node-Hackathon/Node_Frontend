import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const FrameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.63rem;
  align-items: center;
`;

export const FrameBox = styled.div<{ size?: 'l' | 's' }>`
  width: ${({ size }) => (size === 'l' ? '10.9375rem' : '9.375rem')};
  height: ${({ size }) => (size === 'l' ? '10.9375rem' : '9.375rem')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;
  border: 2px solid ${theme.colors.primaryStrong};
  background-color: ${theme.colors.backgroundNormal};

  img {
    width: ${({ size }) => (size === 'l' ? '10.9375rem' : '9.375rem')};
    height: ${({ size }) => (size === 'l' ? '10.9375rem' : '9.375rem')};
    object-fit: contain;
  }
`;
