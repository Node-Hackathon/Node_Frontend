import { PrimaryButton, SecondaryButton } from '../components/button/Button';

export default function ButtonTest() {
  const onClick = () => {
    console.log('버튼 클릭');
  };
  return (
    <>
      <PrimaryButton size="l" onClick={onClick}>
        버튼
      </PrimaryButton>
      <PrimaryButton size="m" onClick={onClick}>
        버튼
      </PrimaryButton>
      <PrimaryButton size="s" onClick={onClick}>
        버튼
      </PrimaryButton>
      <PrimaryButton size="l" onClick={onClick} disabled>
        버튼
      </PrimaryButton>
      <SecondaryButton size="l" onClick={onClick}>
        버튼
      </SecondaryButton>
      <SecondaryButton size="m" onClick={onClick}>
        버튼
      </SecondaryButton>
      <SecondaryButton size="s" onClick={onClick}>
        버튼
      </SecondaryButton>
    </>
  );
}
