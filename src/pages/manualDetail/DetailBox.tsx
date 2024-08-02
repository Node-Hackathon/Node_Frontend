import { ManualDetailBox, ManualDetailContent, ManualDetailImage } from './styles';
import { Body4 } from '../../components/text/Text';
import { DetailBoxType } from './types';

export default function DetailBox({ img, index, text }: DetailBoxType) {
  return (
    <ManualDetailBox>
      <ManualDetailImage>
        <img src={img} />
      </ManualDetailImage>
      <ManualDetailContent>
        <div>{index}</div>
        <Body4>{text}</Body4>
      </ManualDetailContent>
    </ManualDetailBox>
  );
}
