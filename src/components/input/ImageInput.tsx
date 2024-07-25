import { theme } from '../../styles/theme';
import { ImageBox, ImageContainer, PreviewImage } from './styles';
import { ImageInputType } from './types';
import { CiImageOn } from 'react-icons/ci';
import { useImageInput } from './events';

export default function ImageInput({
  name,
  register,
  errors,
  size,
  type,
  secondSetValue,
  secondClearErrors,
  secondSetError,
}: ImageInputType) {
  const { preview, handleFileChange, isFileLoaded } = useImageInput(
    name,
    secondSetValue,
    secondSetError,
    secondClearErrors,
  );

  return (
    <ImageContainer size={size} $iserror={!!errors[name]}>
      <ImageBox
        type={type}
        {...register}
        name={name}
        accept="image/*"
        onChange={handleFileChange}
      />
      {preview && isFileLoaded ? (
        <PreviewImage src={preview} alt="미리보기" />
      ) : (
        <CiImageOn size={50} color={theme.colors.textLight} />
      )}
    </ImageContainer>
  );
}
