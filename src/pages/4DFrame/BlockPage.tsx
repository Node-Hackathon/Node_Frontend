import { use4DBlock } from './events';
import BlockUpload from './BlockUpload';
import { BlockContainer } from './styles';
import BlockLoading from './BlockLoading';
import BlockResult from './BlockResult';

export default function BlockPage() {
  const {
    register,
    handleSubmit,
    errors,
    on4DBlockHandler,
    blockSetValue,
    isLoading,
    isSuccess,
    isError,
  } = use4DBlock();

  return (
    <BlockContainer>
      {isLoading && <BlockLoading />}
      {!isLoading && isSuccess && <BlockResult />}
      {!isLoading && (isError || !isSuccess) && (
        <BlockUpload
          question="비스듬, 계단 2개의 조합을 활용해 만들어주세요"
          buttonText="분석 시작"
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmitHandler={on4DBlockHandler}
          blockSetValue={blockSetValue}
        />
      )}
    </BlockContainer>
  );
}
