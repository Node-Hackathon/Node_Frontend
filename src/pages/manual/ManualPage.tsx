import Frame from '../../components/frame/Frame';
import { ManualBox, ManualContainer, ManualContent, ManualGrid, ManualTitle } from './styles';
import blockImage from '../../assets/images/block.png';
import compositionImage from '../../assets/images/composition.svg';
import cardImage from '../../assets/images/card.png';
import numberImage from '../../assets/images/number.png';

export default function ManualPage() {
  return (
    <ManualContainer>
      <ManualBox>
        <ManualTitle>확인하고 싶은 설명서를 클릭해주세요!</ManualTitle>
        <ManualContent>
          <ManualGrid>
            <Frame size="s" src={blockImage} text="블럭 쌓기" to="block" />
            <Frame size="s" src={compositionImage} text="구성 놀이" to="composition" />
            <Frame size="s" src={cardImage} text="그림 맞추기" to="card" />
            <Frame size="s" src={numberImage} text="숫자 맞추기" to="number" />
          </ManualGrid>
        </ManualContent>
      </ManualBox>
    </ManualContainer>
  );
}
