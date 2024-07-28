import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../components/button/Button';
import ImageInput from '../../components/input/ImageInput';
import { Body2 } from '../../components/text/Text';
import { theme } from '../../styles/theme';
import { FDBox, UploadButton, FDContent, UploadForm, FDManual, FDTitle } from './styles';
import { FDFormTypes, UploadType } from './types';

export default function Upload<T extends FDFormTypes>({
  question,
  manualLink,
  register,
  name,
  errors,
  onSubmitHandler,
  handleSubmit,
  blockSetValue,
  compositionSetValue,
}: UploadType<T>) {
  return (
    <FDBox>
      <FDManual>
        <Link to={manualLink}>
          <PrimaryButton size="xs">설명서</PrimaryButton>
        </Link>
      </FDManual>
      <UploadForm onSubmit={handleSubmit(onSubmitHandler)}>
        <FDContent>
          <FDTitle>{question}</FDTitle>
          <ImageInput
            type="file"
            name={name}
            size="l"
            register={register(name)}
            errors={errors}
            blockSetValue={blockSetValue}
            compositionSetValue={compositionSetValue}
          />
          <Body2 color={theme.colors.textNeutral}>사진을 등록해주세요!</Body2>
        </FDContent>
        <UploadButton>
          <PrimaryButton size="l" type="submit">
            분석 시작
          </PrimaryButton>
        </UploadButton>
      </UploadForm>
    </FDBox>
  );
}
