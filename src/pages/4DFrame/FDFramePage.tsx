import { PrimaryButton } from '../../components/button/Button';
import Frame from '../../components/frame/Frame';
import { FDBox, FDContainer } from './styles';
import blockImage from '../../assets/images/block.png';
import compositionImage from '../../assets/images/composition.svg';
import { Link } from 'react-router-dom';

export default function FDFramePage() {
  return (
    <FDContainer>
      <FDBox>
        <Frame src={blockImage} text="블럭 쌓기" to="block" />
        <Frame src={compositionImage} text="구성 놀이" to="composition" />
        <Link to="manual">
          <PrimaryButton size="l">설명서 확인하기</PrimaryButton>
        </Link>
      </FDBox>
    </FDContainer>
  );
}
