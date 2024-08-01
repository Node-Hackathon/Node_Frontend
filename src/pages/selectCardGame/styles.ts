import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Title1 } from '../../components/text/Text';

export const GameTitle = styled(Title1)`
  flex: 1;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const GameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  max-width: 400px;
  margin-left: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const Card = styled.div`
  width: 70px;
  height: 110px;
  background-color: #5fcf89;
  border: 1px solid #5fcf89;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.flipped {
    background-color: transparent;
  }

  img,
  svg {
    width: 40px;
    height: 40px;
  }

  img.logo {
    width: 54px;
    height: 26px;
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
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;
export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const Stage = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: ${theme.colors.textNeutral};
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

export const Message = styled.div`
  font-size: 1.5rem;
  margin-left: 1rem;
  text-align: center;
  margin-right: 1rem;
`;

export const CommentMessage = styled.div`
  font-size: 1.5rem;
  margin-top: 20px;
  text-align: center;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  /* 카드 스타일이 여기에 추가될 수 있습니다 */
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;
