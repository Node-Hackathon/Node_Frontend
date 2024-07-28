import ProgressBar from '../../../components/progress/ProgressBar';
import { Label2, Label6 } from '../../../components/text/Text';
import { theme } from '../../../styles/theme';
import { ResultGraph, ResultValue } from './styles';
import { BlockResultsType } from '../../../services/4d/types';

export default function BlockGraph({ name, accuracy }: BlockResultsType) {
  return (
    <ResultGraph>
      <ResultValue>
        <Label2 color={theme.colors.textNeutral}>{name}</Label2>
        <Label6 color={theme.colors.primaryPoint}>{accuracy}% 정확해요</Label6>
      </ResultValue>
      <ProgressBar
        currentStep={parseFloat(accuracy)}
        prevStep={0}
        totalStep={100}
        isForward={true}
        type="graph"
      />
    </ResultGraph>
  );
}
