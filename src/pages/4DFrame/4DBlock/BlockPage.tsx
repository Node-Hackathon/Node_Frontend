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
    sentence,
  } = use4DBlock();

  return (
    <FDContainer>
      {isLoading && <BlockLoading />}
      {!isLoading && isSuccess && (
        <BlockResult data={blockData} handleReplay={handleReplay} handleNavigate={handleNavigate} />
      )}
      {!isLoading && (isError || !isSuccess) && sentence && (
        <Upload
          question={sentence}
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
