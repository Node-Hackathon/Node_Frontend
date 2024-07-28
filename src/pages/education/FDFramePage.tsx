import Frame from '../../components/frame/Frame';
import { FDBox, FDContainer, FDLink, FDPair } from './styles';
import { PrimaryButton } from '../../components/button/Button';
import blockImage from '../../assets/images/block.png';
import compositionImage from '../../assets/images/composition.svg';

export default function FDFramePage() {
  return (
    <FDContainer>
      <FDBox>
        <FDPair>
          <Frame src={blockImage} text="블럭 쌓기" to="block" />
          <Frame src={compositionImage} text="구성 놀이" to="composition" />
        </FDPair>
        <FDLink to="manual">
          <PrimaryButton size="l">설명서 확인하기</PrimaryButton>
        </FDLink>
      </FDBox>
    </FDContainer>
  );
}
