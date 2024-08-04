import { PrimaryButton, SecondaryButton } from '../../components/button/Button';
import { Body2 } from '../../components/text/Text';
import { theme } from '../../styles/theme';
import { useDiary } from './events';
import { AlertBox, AlertButton, AlertContent } from './styles';
import { PiHandsClapping } from 'react-icons/pi';

export default function DiaryResult() {
  const { handleGoHome, handleGoResult } = useDiary();

  return (
    <AlertBox>
      <AlertContent>
        <PiHandsClapping size={100} color={theme.colors.primaryStrong} />
        <Body2 color={theme.colors.textNeutral}>일기 작성이 완료 되었어요!</Body2>
      </AlertContent>
      <AlertButton>
        <SecondaryButton size="m" onClick={handleGoHome}>
          처음으로
        </SecondaryButton>
        <PrimaryButton size="m" onClick={handleGoResult}>
          누적 일기 확인
        </PrimaryButton>
      </AlertButton>
    </AlertBox>
  );
}
