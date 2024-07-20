export const calculateProgressWidth = (currentStep: number, totalStep: number): number => {
  return (currentStep / totalStep) * 100;
};

export const calculatePrevProgressWidth = (prevStep: number, totalStep: number): number => {
  return (prevStep / totalStep) * 100;
};
