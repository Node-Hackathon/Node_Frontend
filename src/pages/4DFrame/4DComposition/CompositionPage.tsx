import { FDContainer } from '../styles';
import Upload from '../Upload';
import CompositionResult from './CompositionResult';
import { use4DComposition } from './events';

export default function CompositionPage() {
  const {
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
    sentence,
    sentenceIsSuccess,
  } = use4DComposition();

  return (
    <FDContainer>
      {(isError || !isSuccess) && sentenceIsSuccess && sentence && (
        <Upload
          question={sentence}
          register={register}
          name="composition_image"
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmitHandler={on4DCompositionHandler}
          compositionSetValue={compositionSetValue}
          manualLink="/education/4DFrame/manual/composition"
        />
      )}
      {isSuccess && (
        <CompositionResult
          data={compositionData}
          handleReplay={handleReplay}
          handleNavigate={handleNavigate}
        />
      )}
    </FDContainer>
  );
}
