export interface ButtonType {
  size: 's' | 'm' | 'l';
  onClick: () => void;
  disabled?: boolean;
}
