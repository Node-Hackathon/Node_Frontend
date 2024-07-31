import { styled } from 'styled-components';
import { theme } from '../../../styles/theme';
import { Body2, Title1 } from '../../../components/text/Text';

export const NumberContainer = styled.section`
  width: 100%;
  height: calc(100% - 4rem);
  min-height: calc(100% - 4rem);
  padding: 3.75rem 0;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

export const NumberBeforeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const NumberBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const NumberTitle = styled(Title1)`
  flex: 1;
`;

export const NumberContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 4;
  gap: 1.5rem;
`;

export const NumberRound = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const NumberLevel = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${theme.colors.textNeutral};
  display: flex;
  align-items: center;
`;

export const NumberGrid = styled.div`
  width: 20rem;
  height: 20rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  padding: 0.75rem;
  border-radius: 0.3125rem;
  border: 0.5px solid ${theme.colors.primaryHeavy};
`;

export const NumberItemBox = styled.div<{ revealed: boolean; gameStarted: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.revealed
      ? theme.colors.backgroundNormal
      : props.gameStarted
        ? theme.colors.primaryStrong
        : theme.colors.backgroundNormal};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.gameStarted && !props.revealed ? 'pointer' : 'default')};
`;

export const NumberItemText = styled(Body2)<{ revealed: boolean; gameStarted: boolean }>`
  opacity: ${(props) => (props.gameStarted && !props.revealed ? 0 : 1)};
`;

export const NumberButtonPair = styled.div`
  min-width: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
