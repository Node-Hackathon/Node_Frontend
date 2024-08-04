import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const TextareaBox = styled.textarea<{ $iserror?: boolean; readonly?: boolean }>`
  width: 20rem;
  height: ${({ readOnly }) => (readOnly ? 'auto' : '10rem')};
  min-height: 10rem;
  border-radius: 0.5rem;
  border: 1px solid
    ${({ $iserror, readOnly }) =>
      readOnly
        ? theme.colors.primaryNormal
        : $iserror
          ? theme.colors.error
          : theme.colors.textNormal};
  background-color: ${theme.colors.backgroundNeutral};
  padding: 1rem;
  font-size: 1rem;
  font-weight: 500;

  &:focus {
    border: ${({ readOnly }) => readOnly && `1px solid ${theme.colors.primaryNormal}`};
  }
`;
