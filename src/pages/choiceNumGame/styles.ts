import styled from 'styled-components';

export const GameContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const NumberButton = styled.button<{ x: number; y: number }>`
  position: absolute;
  width: 50px;
  height: 50px;
  margin: 5px;
  font-size: 18px;
  cursor: pointer;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  top: ${(props) => props.y}%;
  left: ${(props) => props.x}%;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const InfoContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 18px;
`;
