import { useForm } from 'react-hook-form';
import { FDBlockFormType } from '../../services/4d/types';
import { useBlockPlayMutation } from '../../services/4d/fdApi';

export const use4DBlock = () => {
  const {
    register,
    handleSubmit,
    setValue: blockSetValue,
    formState: { errors },
  } = useForm<FDBlockFormType>();

  const [blockPlay, { isLoading, isSuccess, isError }] = useBlockPlayMutation();

  const on4DBlockHandler = async (data: FDBlockFormType) => {
    console.log(data.blockImage);
    let formData = new FormData();
    const blockImage = data.blockImage;

    if (blockImage) {
      if (blockImage instanceof File) {
        if (blockImage.type.startsWith('image/')) {
          formData.append('blockImage', blockImage);

          try {
            const response = await blockPlay(formData).unwrap();
            console.log(response);
            console.log('제출 성공');
          } catch (error) {
            console.error('폼 제출 오류:', error);
          }
        } else {
          alert('사진만 등록할 수 있습니다.');
        }
      } else {
        alert('사진이 아직 로드되지 않았습니다.');
        console.error('사진이 아직 완전히 로드되지 않았습니다.');
      }
    } else {
      alert('사진을 등록해주세요.');
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    on4DBlockHandler,
    blockSetValue,
    isLoading,
    isSuccess,
    isError,
  };
};
