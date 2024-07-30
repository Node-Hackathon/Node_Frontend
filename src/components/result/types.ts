export interface GameResult {
  title: string;
  game01: {
    date: string;
    result: string;
  };
  game02: {
    date: string;
    result: string;
  };
  game03: {
    date: string;
    result: string;
  };
}

export interface ResultTypes {
  gameObj: GameResult;
  slice?: string;
}
