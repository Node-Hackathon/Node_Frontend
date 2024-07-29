export type Card = {
  value: number;
  isFlipped: boolean;
  isMatched?: boolean;
};

export type GameState = 'idle' | 'playing' | 'won' | 'lost';
