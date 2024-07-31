import blockImage from '../../assets/images/block.png';
import compositionImage from '../../assets/images/composition.svg';
import EducationPage from './EducationPage';

export default function FDFramePage() {
  return (
    <EducationPage
      firstImage={blockImage}
      secondImage={compositionImage}
      firstText="블럭 쌓기"
      secondText="구성 놀이"
      firstLink="block"
      secondLink="composition"
    />
  );
}
