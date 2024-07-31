import { NumberItemBox, NumberItemText } from './styles';
import { NumberType } from './types';

export default function Number({ value, revealed, onClick, index, gameStarted }: NumberType) {
  return (
    <NumberItemBox onClick={() => onClick(index)} revealed={revealed} gameStarted={gameStarted}>
      <NumberItemText revealed={revealed} gameStarted={gameStarted}>
        {value}
      </NumberItemText>
    </NumberItemBox>
  );
}
