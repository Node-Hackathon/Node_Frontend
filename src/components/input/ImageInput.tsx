import React from 'react';
import { useState } from 'react';
import { theme } from '../../styles/theme';
import { ImageBox, ImageContainer, PreviewImage } from './styles';
import { ImageInputType } from './types';
import { CiImageOn } from 'react-icons/ci';

export default function ImageInput({
  name,
  register,
  errors,
  size,
  type,
  secondSetValue,
}: ImageInputType) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      secondSetValue?.(name, file, { shouldValidate: true, shouldDirty: true });
    }
  };

  return (
    <ImageContainer size={size}>
      <ImageBox
        type={type}
        {...register}
        $iserror={!!errors[name]}
        name={name}
        accept="image/*"
        onChange={handleImageSelect}
      />
      {preview ? (
        <PreviewImage src={preview} alt="미리보기" />
      ) : (
        <CiImageOn size={50} color={theme.colors.textLight} />
      )}
    </ImageContainer>
  );
}
