import { PrimaryButton } from '../../components/button/Button';
import ImageInput from '../../components/input/ImageInput';
import { Body2 } from '../../components/text/Text';
import { theme } from '../../styles/theme';
import { use4DBlock } from './events';
import {
  UploadBox,
  UploadButton,
  UploadContainer,
  UploadContent,
  UploadForm,
  UploadManual,
  UploadTitle,
} from './styles';

export default function BlockUploadPage() {
  const { register, handleSubmit, errors, on4DBlockHandler, blockSetValue } = use4DBlock();

  return (
    <UploadContainer>
      <UploadBox>
        <UploadManual>
          <PrimaryButton size="xs">설명서</PrimaryButton>
        </UploadManual>
        <UploadForm onSubmit={handleSubmit(on4DBlockHandler)}>
          <UploadContent>
            <UploadTitle>비스듬, 계단 2개의 조합을 활용해 만들어주세요</UploadTitle>
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
              분석 시작
            </PrimaryButton>
          </UploadButton>
        </UploadForm>
      </UploadBox>
    </UploadContainer>
  );
}
