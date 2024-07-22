import { GenderInputType } from './types';
import { GenderButton, GenderInputBox } from './styles';
import { useGenderInput } from './events';

export default function GenderInput({ name, firstSetValue }: GenderInputType) {
  const { handleGenderChange, selectedGender } = useGenderInput();

  return (
    <GenderInputBox>
      <GenderButton
        value="남성"
        onClick={(e) => {
          e.preventDefault();
          handleGenderChange(name, '남성', firstSetValue);
        }}
        selected={selectedGender === '남성'}
        size="m"
      >
        남
      </GenderButton>
      <GenderButton
        value="여성"
        onClick={(e) => {
          e.preventDefault();
          handleGenderChange(name, '여성', firstSetValue);
        }}
        selected={selectedGender === '여성'}
        size="m"
      >
        여
      </GenderButton>
    </GenderInputBox>
  );
}
