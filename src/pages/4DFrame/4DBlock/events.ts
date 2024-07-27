import { useForm } from 'react-hook-form';
import { BlockReturnType, FDBlockFormType } from '../../../services/4d/types';
import { useBlockPlayMutation } from '../../../services/4d/fdApi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const use4DBlock = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue: blockSetValue,
    formState: { errors },
  } = useForm<FDBlockFormType>();

  const handleReplay = () => {
    navigate(0);
  };

  const handleNavigate = () => {
    navigate('/myPage/result/block');
  };

  const [blockPlay, { isLoading, isSuccess, isError }] = useBlockPlayMutation();
  const [blockData, setBlockData] = useState<BlockReturnType | null>(null);

  const on4DBlockHandler = async (data: FDBlockFormType) => {
    let formData = new FormData();
    const blockImage = data.blockImage;

    if (blockImage) {
      if (blockImage instanceof File) {
        if (blockImage.type.startsWith('image/')) {
          formData.append('blockImage', blockImage);

          try {
            const response = await blockPlay(formData).unwrap();
            setBlockData(response);
          } catch (error) {
            alert('사진 분석에 실패했습니다. 다시 시도해주세요.');
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
    blockData,
    handleReplay,
    handleNavigate,
  };
};
