import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const FrameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.63rem;
  align-items: center;
`;

export const FrameBox = styled.div`
  width: 10.9375rem;
  height: 10.9375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;
  border: 2px solid ${theme.colors.primaryStrong};
  background-color: ${theme.colors.backgroundNormal};
`;
