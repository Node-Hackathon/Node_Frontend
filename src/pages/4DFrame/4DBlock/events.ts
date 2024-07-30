import { useForm } from 'react-hook-form';
import { BlockReturnType, FDBlockFormType } from '../../../services/4d/types';
import {
  useBlockPlayMutation,
  useGetRandomBlockSentenceMutation,
} from '../../../services/4d/fdApi';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { use4DFrame } from '../events';

export const use4DBlock = () => {
  const navigate = useNavigate();
  const [blockData, setBlockData] = useState<BlockReturnType | null>(null);
  const { handleReplay } = use4DFrame();

  const [getBlockSentence, { data, isSuccess: sentenceIsSuccess }] =
    useGetRandomBlockSentenceMutation();
  const [blockPlay, { isLoading, isSuccess, isError }] = useBlockPlayMutation();

  useEffect(() => {
    const fetchBlockSentence = async () => {
      try {
        await getBlockSentence().unwrap();
      } catch (err) {
        alert('질문 생성을 실패했습니다.');
        console.log(err);
      }
    };
    fetchBlockSentence();
  }, [getBlockSentence]);

  const {
    register,
    handleSubmit,
    setValue: blockSetValue,
    formState: { errors },
  } = useForm<FDBlockFormType>();

  const handleNavigate = () => navigate('/myPage/result/block');

  const on4DBlockHandler = async (data: FDBlockFormType) => {
    const { blockImage } = data;

    if (blockImage && blockImage instanceof File) {
      if (!blockImage.type.startsWith('image/')) {
        return alert('사진만 등록할 수 있습니다.');
      }

      const formData = new FormData();
      formData.append('blockImage', blockImage);

      try {
        const response = await blockPlay(formData).unwrap();
        if (response === null) {
          alert('분석에 실패했습니다! 다시 시도해주세요.');
          handleReplay();
        } else {
          setBlockData(response);
        }
      } catch (error) {
        alert('사진 분석에 실패했습니다. 다시 시도해주세요.');
        console.error('폼 제출 오류:', error);
      }
    } else {
      alert(blockImage ? '사진이 아직 로드되지 않았습니다.' : '사진을 등록해주세요.');
      console.error(
        '사진 처리 오류:',
        blockImage ? '사진이 아직 완전히 로드되지 않았습니다.' : '사진이 없습니다.',
      );
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
    sentence: data?.RandomBlockSentence,
    sentenceIsSuccess,
  };
};
