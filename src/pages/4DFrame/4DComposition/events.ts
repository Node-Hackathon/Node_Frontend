import { useForm } from 'react-hook-form';
import { CompositionReturnType, FDCompositionFormType } from '../../../services/4d/types';
import { useState } from 'react';
import { useCompositionPlayMutation } from '../../../services/4d/fdApi';
import { use4DFrame } from '../events';
import { useNavigate } from 'react-router-dom';

export const use4DComposition = () => {
  const navigate = useNavigate();
  const [compositionData, setCompositionData] = useState<CompositionReturnType | null>(null);
  const { handleReplay } = use4DFrame();

  const [compositionPlay, { isSuccess, isError }] = useCompositionPlayMutation();

  const {
    register,
    handleSubmit,
    setValue: compositionSetValue,
    formState: { errors },
  } = useForm<FDCompositionFormType>();

  const handleNavigate = () => navigate('/myPage/result/composition');

  const on4DCompositionHandler = async (data: FDCompositionFormType) => {
    const { composition_image } = data;

    if (composition_image && composition_image instanceof File) {
      if (!composition_image.type.startsWith('image/')) {
        return alert('사진만 등록할 수 있습니다.');
      }

      const formData = new FormData();
      formData.append('composition_image', composition_image);

      try {
        const response = await compositionPlay(formData).unwrap();
        if (response === null) {
          alert('분석에 실패했습니다! 다시 시도해주세요.');
          handleReplay();
        } else {
          setCompositionData(response);
        }
      } catch (error) {
        alert('사진 분석에 실패했습니다. 다시 시도해주세요.');
        console.error('폼 제출 오류:', error);
      }
    } else {
      alert(composition_image ? '사진이 아직 로드되지 않았습니다.' : '사진을 등록해주세요.');
      console.error(
        '사진 처리 오류:',
        composition_image ? '사진이 아직 완전히 로드되지 않았습니다.' : '사진이 없습니다.',
      );
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    on4DCompositionHandler,
    compositionSetValue,
    compositionData,
    isSuccess,
    isError,
    handleReplay,
    handleNavigate,
  };
};
