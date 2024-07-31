import ProgressBar from '../../components/progress/ProgressBar';
import { Body3, Label5, Label6 } from '../../components/text/Text';
import { theme } from '../../styles/theme';
import { GraphBox } from './styles';
import { GraphType } from './types';

export default function ResultGraph({ count, date, isToday }: GraphType) {
  return (
    <GraphBox>
      <Body3 color={theme.colors.textNeutral}>{count}회</Body3>
      <ProgressBar
        currentStep={count}
        prevStep={0}
        totalStep={10}
        isForward={isToday}
        type="game"
      />
      {isToday ? (
        <Label5 color={theme.colors.textNeutral}>{date}</Label5>
      ) : (
        <Label6 color={theme.colors.textPoint}>{date}</Label6>
      )}
    </GraphBox>
  );
}
