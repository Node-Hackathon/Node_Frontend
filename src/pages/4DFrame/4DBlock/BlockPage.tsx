import { use4DBlock } from './events';
import { FDContainer } from '../styles';
import BlockLoading from './BlockLoading';
import BlockResult from './BlockResult';
import Upload from '../Upload';

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
    blockData,
    handleReplay,
    handleNavigate,
  } = use4DBlock();

  return (
    <FDContainer>
      {isLoading && <BlockLoading />}
      {!isLoading && isSuccess && (
        <BlockResult data={blockData} handleReplay={handleReplay} handleNavigate={handleNavigate} />
      )}
      {!isLoading && (isError || !isSuccess) && (
        <Upload
          question="비스듬, 계단 2개의 조합을 활용해 만들어주세요"
          register={register}
          name="blockImage"
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmitHandler={on4DBlockHandler}
          blockSetValue={blockSetValue}
          manualLink="/education/4DFrame/manual/block"
        />
      )}
    </FDContainer>
  );
}
