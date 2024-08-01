export interface Card {
  value: string; // number에서 string으로 변경
  isFlipped: boolean;
  isMatched: boolean;
}

export type GameState = 'start' | 'idle' | 'playing' | 'won' | 'lost'; // 'lost' 상태 추가

export interface IdleType {
  timeLeft: number;
}

export interface PlayingType {
  totalTimeLeft: number;
}

export interface WonType {
  handleNextStage: () => void;
  handleQuit: () => void;
}

export interface LostType {
  handleGoResult: () => void;
}
