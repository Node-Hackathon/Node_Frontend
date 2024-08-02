import DetailBox from './DetailBox';
import {
  ManualDetailList,
  ManualDetailContainer,
  ManualDetailTitle,
  ManualDetailWrapper,
} from './styles';
import { useManual } from './events';

export default function ManualDetailPage() {
  const sectionData = useManual();

  return (
    <ManualDetailContainer>
      <ManualDetailWrapper>
        <ManualDetailTitle>{sectionData?.title}</ManualDetailTitle>
        <ManualDetailList>
          {sectionData?.details.map((detail, index) => (
            <DetailBox key={index} img={detail.img} index={index + 1} text={detail.text} />
          ))}
        </ManualDetailList>
      </ManualDetailWrapper>
    </ManualDetailContainer>
  );
}
