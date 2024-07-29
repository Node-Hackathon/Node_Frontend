import styled from 'styled-components';

export const GameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  max-width: 400px;
  margin: auto;
`;

export const Card = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;

  &.flipped {
    background-color: #fff;
  }
`;

export const Message = styled.div`
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
`;
