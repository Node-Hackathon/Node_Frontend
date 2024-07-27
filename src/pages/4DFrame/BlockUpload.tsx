import { PrimaryButton } from '../../components/button/Button';
import ImageInput from '../../components/input/ImageInput';
import { Body2 } from '../../components/text/Text';
import { theme } from '../../styles/theme';
import {
  UploadBox,
  UploadButton,
  UploadContent,
  UploadForm,
  UploadManual,
  UploadTitle,
} from './styles';
import { BlockUploadType } from './types';

export default function BlockUpload({
  question,
  buttonText,
  register,
  errors,
  onSubmitHandler,
  handleSubmit,
  blockSetValue,
}: BlockUploadType) {
  return (
    <UploadBox>
      <UploadManual>
        <PrimaryButton size="xs">설명서</PrimaryButton>
      </UploadManual>
      <UploadForm onSubmit={handleSubmit(onSubmitHandler)}>
        <UploadContent>
          <UploadTitle>{question}</UploadTitle>
          <ImageInput
            type="file"
            name="blockImage"
            size="l"
            register={register('blockImage')}
            errors={errors}
            blockSetValue={blockSetValue}
          />
          <Body2 color={theme.colors.textNeutral}>사진을 등록해주세요!</Body2>
        </UploadContent>
        <UploadButton>
          <PrimaryButton size="l" type="submit">
            {buttonText}
          </PrimaryButton>
        </UploadButton>
      </UploadForm>
    </UploadBox>
  );
}
