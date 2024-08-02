import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { Body2 } from '../text/Text';
import { FrameBox, FrameContainer } from './styles';
import { FrameType } from './types';

export default function Frame({ src, text, to, size = 'l' }: FrameType) {
  return (
    <FrameContainer>
      <Link to={to}>
        <FrameBox size={size}>
          <img src={src} alt={text} />
        </FrameBox>
      </Link>
      <Body2 color={theme.colors.textBlack}>{text}</Body2>
    </FrameContainer>
  );
}
