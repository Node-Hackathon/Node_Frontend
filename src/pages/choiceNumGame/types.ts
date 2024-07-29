export interface GameState {
  round: number;
  numbers: number[];
  currentIndex: number;
  positions: { x: number; y: number }[];
  isGameOver: boolean;
  finalScore: number;
}
