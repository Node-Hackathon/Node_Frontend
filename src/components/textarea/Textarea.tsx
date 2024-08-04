import { TextareaBox } from './styles';
import { TextareaType } from './types';

export default function Textarea({ value, onChange, error, disabled }: TextareaType) {
  return (
    <TextareaBox
      value={value}
      onChange={onChange}
      $iserror={error}
      readOnly={disabled}
    ></TextareaBox>
  );
}
