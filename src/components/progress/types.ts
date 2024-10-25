export interface ProgressType {
  currentStep: number;
  prevStep: number;
  totalStep: number;
  isForward: boolean;
  type?: 'default' | 'graph' | 'game';
}
