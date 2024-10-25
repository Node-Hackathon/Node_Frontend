import React from 'react';
import { Message } from './styles';
import { PlayingType } from './types';

const Playing: React.FC<PlayingType> = ({ totalTimeLeft }) => {
  return <Message>남은 시간 : {totalTimeLeft} 초</Message>;
};

export default Playing;
