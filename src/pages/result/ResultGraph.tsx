import ProgressBar from '../../components/progress/ProgressBar';
import { Body3, Label6 } from '../../components/text/Text';
import { theme } from '../../styles/theme';
import { GraphBox } from './styles';
import { GraphType } from './types';

export default function ResultGraph({ count, date }: GraphType) {
  return (
    <GraphBox>
      <Body3 color={theme.colors.textNeutral}>{count}회</Body3>
      <ProgressBar currentStep={count} prevStep={0} totalStep={10} isForward={true} type="game" />
      <Label6 color={theme.colors.textPoint}>{date}</Label6>
    </GraphBox>
  );
}
