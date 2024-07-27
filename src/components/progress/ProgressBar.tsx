import { calculateProgressWidth, calculatePrevProgressWidth } from './events';
import { ProgressContainer, ProgressGradient } from './styles';
import { ProgressType } from './types';

export default function ProgressBar({
  currentStep,
  prevStep,
  totalStep,
  isForward,
  type = 'default',
}: ProgressType) {
  const progressWidth = calculateProgressWidth(currentStep, totalStep);
  const prevProgressWidth = calculatePrevProgressWidth(prevStep, totalStep);

  return (
    <ProgressContainer type={type}>
      <ProgressGradient
        $width={progressWidth}
        $prevWidth={prevProgressWidth}
        $isForward={isForward}
        type={type}
      />
    </ProgressContainer>
  );
}
