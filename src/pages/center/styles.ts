import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Label7, Title2 } from '../../components/text/Text';

export const CenterContainer = styled.section`
  width: 100%;
  height: calc(100% - 4rem);
  min-height: calc(100% - 4rem);
  padding: 1.25rem;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

export const CenterBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
`;

export const CenterTop = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export const CenterTitle = styled(Title2)`
  padding-left: 0.25rem;
`;

export const SelectContainer = styled.div`
  position: relative;
  font-size: 0.875rem;
  color: ${theme.colors.textNeutral};
`;

export const SelectOption = styled.div`
  width: 8rem;
  padding: 0.25rem 0.5rem;
  font-weight: 600;
  border: 1px solid ${theme.colors.textNormal};
  border-radius: 0.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const OptionsList = styled.ul`
  position: absolute;
  width: 8rem;
  border: 1px solid ${theme.colors.textNormal};
  border-radius: 0.375rem;
  background-color: ${theme.colors.backgroundNormal};
  max-height: 14.7rem;
  z-index: 100;
  overflow-y: auto;
  font-weight: 500;
`;

export const OptionItem = styled.li`
  padding: 0.5rem;
  border-bottom: 1px solid ${theme.colors.backgroundLight};
  cursor: pointer;
  &:active,
  &:hover {
    background-color: ${theme.colors.backgroundLight};
  }
`;

export const CenterListBox = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  overflow-y: auto;
`;

export const CenterListItem = styled.li`
  width: 100%;
  min-width: 20rem;
  height: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
  border-radius: 0.5rem;
  border: 1px solid ${theme.colors.textNormal};
  background-color: ${theme.colors.backgroundNormal};

  span {
    white-space: normal;
  }
`;

export const CenterType = styled(Label7)<{ type: string }>`
  width: auto;
  height: auto;
  padding: 0.25rem;
  background-color: ${({ type }) =>
    type === '치매안심센터' ? theme.colors.primaryStrong : theme.colors.primaryHeavy};
  color: ${theme.colors.backgroundNormal};
  border-radius: 0.1875rem;
`;

export const CenterPair = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
