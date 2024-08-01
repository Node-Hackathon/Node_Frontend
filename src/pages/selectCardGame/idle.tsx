import React from 'react';
import { Message } from './styles';

interface IdleProps {
  timeLeft: number;
}

const Idle: React.FC<IdleProps> = ({ timeLeft }) => {
  return <Message>{timeLeft} 초</Message>;
};

export default Idle;
