import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { Title1 } from '../../../components/text/Text';

export const GameContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  overflow-x: hidden;
`;

export const GameTitle = styled(Title1)`
  display: flex;
  align-items: center;
  flex: 0.25;
  text-align: center;
`;

export const GameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  width: 20rem;
  height: 29.375rem;
`;

export const Card = styled.div`
  width: 4.375rem;
  height: 6.875rem;
  background-color: #5fcf89;
  border: 1px solid #5fcf89;
  border-radius: 0.4375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: pointer;

  &.flipped {
    background-color: transparent;
  }

  img,
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  img.logo {
    width: 3.125rem;
    height: 1.625rem;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  }

  button {
    margin: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 20rem;
  justify-content: space-between;
`;

export const CenteredContainer = styled.div`
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Stage = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: ${theme.colors.textNeutral};
  display: flex;
  align-items: center;
`;

export const Message = styled.div<{ type?: string }>`
  font-size: ${({ type }) => (type === 'won' || type === 'lost' ? '1.375rem' : '1.125rem')};
  font-weight: ${({ type }) => (type === 'won' || type === 'lost' ? 700 : 600)};
  text-align: center;
  color: ${({ type }) =>
    type === 'won' || type === 'lost' ? theme.colors.textNeutral : theme.colors.textPoint};
  white-space: nowrap;
`;

export const CommentMessage = styled.div`
  font-size: 1.375rem;
  font-weight: 700;
  text-align: center;
  color: ${theme.colors.textNeutral};
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  flex: 0.25;
`;

export const GameResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.5;
`;
