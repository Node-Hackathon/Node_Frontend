import { styled } from 'styled-components';
import checkboxBefore from '../../assets/images/CheckBox-before.svg';
import checkboxAfter from '../../assets/images/CheckBox-after.svg';
import { theme } from '../../styles/theme';

export const DiagnosisContainer = styled.section`
  width: 100%;
  height: calc(100% - 4rem);
  min-height: calc(100% - 4rem);
  padding: 2.5rem 0;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

export const DiagnosisBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const DiagnosisContent = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const DiagnosisTitle = styled.div`
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 0.31rem;
  justify-content: center;
  h1 {
    word-break: keep-all;
    white-space: normal;
  }
`;

export const ProgressBarBox = styled.div`
  display: flex;
  margin: 1.25rem 0 1.56rem 0;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const CheckBoxInput = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const CheckBoxLabel = styled.label`
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${checkboxBefore});
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  gap: 0.63rem;
  align-items: center;

  ${CheckBoxInput}:checked + & {
    background-image: url(${checkboxAfter});
  }
`;

export const TextLabel = styled.label`
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  gap: 0.63rem;
  align-items: center;
  cursor: pointer;
`;

export const DiagnosisButton = styled.div`
  min-width: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
`;

export const ResultContent = styled(DiagnosisContent)`
  align-items: center;
  justify-content: space-evenly;
`;

export const ResultTitlePair = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    color: ${theme.colors.textNeutral};
  }
`;
