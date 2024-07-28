import { Body4, Label6 } from '../../components/text/Text';
import { theme } from '../../styles/theme';
import { CenterListItem, CenterPair, CenterType } from './styles';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { CenterListType } from './type';

export default function CenterList({ center }: CenterListType) {
  const { center_address, center_name, center_phone_num, center_type } = center;
  return (
    <CenterListItem>
      <CenterType type={center_type}>{center_type}</CenterType>
      <Body4>{center_name}</Body4>
      <CenterPair>
        <FaPhoneAlt color={theme.colors.textNeutral} />
        <Label6 color={theme.colors.textNeutral}>{center_phone_num}</Label6>
      </CenterPair>
      <CenterPair>
        <FaLocationDot color={theme.colors.textNeutral} />
        <Label6 color={theme.colors.textNeutral}>{center_address}</Label6>
      </CenterPair>
    </CenterListItem>
  );
}
