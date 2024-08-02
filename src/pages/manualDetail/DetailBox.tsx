import { ManualDetailBox, ManualDetailContent, ManualDetailImage } from './styles';
import { Body4 } from '../../components/text/Text';
import { DetailBoxType } from './types';
import block1Url from '../../assets/images/block1.png';

export default function DetailBox({ img, index, text }: DetailBoxType) {
  const isSpecialCase = img === block1Url && index === 1;

  return (
    <ManualDetailBox>
      <ManualDetailImage isFirst={isSpecialCase}>
        <img src={img} />
      </ManualDetailImage>
      <ManualDetailContent>
        <div>{index}</div>
        <Body4>{text}</Body4>
      </ManualDetailContent>
    </ManualDetailBox>
  );
}
