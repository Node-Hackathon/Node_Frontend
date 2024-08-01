import React from 'react';
import { Message } from './styles';

interface PlayingProps {
  totalTimeLeft: number;
}

const Playing: React.FC<PlayingProps> = ({ totalTimeLeft }) => {
  return <Message>남은 시간: {totalTimeLeft} 초</Message>;
};

export default Playing;
