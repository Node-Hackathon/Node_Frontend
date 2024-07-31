export interface NumberType {
  value: number | null;
  revealed: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick: (index: number) => void;
  index: number;
  gameStarted: boolean;
}
