import styled from 'styled-components';
import { ButtonType } from './types';
import { theme } from '../../styles/theme';

const BaseButton = styled.button<ButtonType>`
  width: ${({ size }) => (size === 'l' ? '20rem' : size === 'm' ? '9.6875rem' : 'auto')};
  height: ${({ size }) => (size === 's' ? '2rem' : '3.5rem')};
  font-size: 1rem;
  font-weight: 600;
  padding: 0 1.47rem;
  border-radius: 0.5rem;
`;

const PrimaryButton = styled(BaseButton)`
  background-color: ${({ disabled }) =>
    disabled ? theme.colors.textNormal : theme.colors.primaryNormal};
  color: ${({ disabled }) => (disabled ? theme.colors.textLight : theme.colors.backgroundNormal)};
  border: none;

  &:active {
    background: ${theme.colors.primaryStrong};
  }
`;

const SecondaryButton = styled(BaseButton)`
  background-color: ${theme.colors.backgroundNormal};
  color: ${theme.colors.primaryNormal};
  border: 1px solid ${theme.colors.primaryStrong};
`;

export { PrimaryButton, SecondaryButton };
