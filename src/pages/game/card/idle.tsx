import React from 'react';
import { Message } from './styles';
import { IdleType } from './types';

const Idle: React.FC<IdleType> = ({ timeLeft }) => {
  return <Message>{timeLeft} 초</Message>;
};

export default Idle;
