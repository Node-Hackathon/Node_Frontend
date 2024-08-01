import cardImage from '../../assets/images/card.png';
import numberImage from '../../assets/images/number.svg';
import EducationPage from './EducationPage';

export default function GamePage() {
  return (
    <EducationPage
      firstImage={cardImage}
      secondImage={numberImage}
      firstText="카드 뒤집기"
      secondText="숫자 맞추기"
      firstLink="cardStart"
      secondLink="number"
    />
  );
}
