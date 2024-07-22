export interface ButtonType {
  size: 's' | 'm' | 'l';
  // eslint-disable-next-line no-unused-vars
  onClick?: (e?: any) => void;
  disabled?: boolean;
  type?: string;
}
