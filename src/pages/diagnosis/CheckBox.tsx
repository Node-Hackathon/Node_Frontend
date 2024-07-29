import { CheckBoxInput, CheckBoxLabel, TextLabel } from './styles';
import { CheckBoxType } from './types';

export default function CheckBox({ children, id, checked, onChange }: CheckBoxType) {
  return (
    <TextLabel>
      <CheckBoxInput id={id} type="checkbox" checked={checked} onChange={onChange} />
      <CheckBoxLabel></CheckBoxLabel>
      {children}
    </TextLabel>
  );
}
