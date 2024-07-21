import { useState } from 'react';
import ProgressBar from '../components/progress/ProgressBar';

export default function ProgressTest() {
  const totalSteps = 3;
  const [currentStep, setCurrentStep] = useState(0);
  const [prevStep, setPrevStep] = useState(-1);
  const [isForward, setIsForward] = useState(true);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setPrevStep(currentStep);
      setCurrentStep(currentStep + 1);
      setIsForward(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setPrevStep(currentStep);
      setCurrentStep(currentStep - 1);
      setIsForward(false);
    }
  };

  return (
    <div>
      <ProgressBar
        currentStep={currentStep}
        prevStep={prevStep}
        totalStep={totalSteps}
        isForward={isForward}
      />
      <button onClick={handlePrev} disabled={currentStep === 0}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentStep === totalSteps}>
        Next
      </button>
    </div>
  );
}
