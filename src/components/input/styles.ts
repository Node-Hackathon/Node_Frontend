import styled from 'styled-components';
import { Label5, Label7 } from '../text/Text';
import { theme } from '../../styles/theme';
import { InputStyleType } from './types';
import { SecondaryButton } from '../button/Button';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.31rem;
`;

export const InputPlaceholder = styled(Label5).attrs({
  color: `${theme.colors.textHeavy}`,
})`
  margin-left: 1rem;
`;

export const InputBox = styled.div<InputStyleType>`
  width: ${({ size }) => (size === 'l' ? '20rem' : '10rem')};
  position: relative;
`;

export const InputBase = styled.input<InputStyleType>`
  width: ${({ size }) => (size === 'l' ? '20rem' : '10rem')};
  height: 3.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ $iserror }) => ($iserror ? theme.colors.error : theme.colors.textNormal)};
  background-color: ${theme.colors.backgroundNormal};
  padding: 0 ${({ name }) => (name === 'password' ? '3.5rem' : '1rem')} 0 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${theme.colors.textBlack};

  &::placeholder {
    color: ${theme.colors.textLight};
  }

  &:focus {
    border: 1px solid
      ${({ $iserror }) => ($iserror ? theme.colors.error : theme.colors.primaryNormal)};
  }
`;

export const InputIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const InputTimer = styled.div`
  position: absolute;
  top: 1.19rem;
  right: 1rem;
`;

export const GenderInputBox = styled.div`
  display: flex;
  width: 20rem;
  gap: 0.62rem;
`;

export const GenderButton = styled(SecondaryButton)<{ selected: boolean }>`
  width: 100%;
  background-color: ${({ selected }) =>
    selected ? theme.colors.primaryNormal : theme.colors.backgroundNormal};
  color: ${({ selected }) => (selected ? theme.colors.backgroundNormal : theme.colors.textLight)};
  border: ${({ selected }) => (selected ? 'none' : `1px solid ${theme.colors.primaryStrong}`)};
  cursor: pointer;
`;

export const InputMessage = styled(Label7)`
  margin-left: 0.38rem;
`;
