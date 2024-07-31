import { GameReturnType } from '../../services/game/types';

export interface GraphType {
  count: number;
  date: string;
  isToday: boolean;
}

export interface ResultType {
  game: string;
  graphData: GameReturnType[];
}
