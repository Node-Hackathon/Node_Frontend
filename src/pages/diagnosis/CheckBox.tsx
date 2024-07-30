import { CheckBoxInput, CheckBoxLabel, TextLabel } from './styles';
import { CheckBoxType } from './types';

export default function CheckBox({ children, id, name, checked, onChange }: CheckBoxType) {
  return (
    <TextLabel>
      <CheckBoxInput id={id} name={name} type="radio" checked={checked} onChange={onChange} />
      <CheckBoxLabel></CheckBoxLabel>
      {children}
    </TextLabel>
  );
}
