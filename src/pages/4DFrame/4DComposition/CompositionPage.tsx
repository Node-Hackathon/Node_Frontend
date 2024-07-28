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
  } = use4DComposition();

  return (
    <FDContainer>
      {(isError || !isSuccess) && (
        <Upload
          question={`블럭을 이용해 "부엉이"를 만들어주세요`}
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
