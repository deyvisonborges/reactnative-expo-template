import { useCallback, useState } from "react";

type StepNavigationConfig = {
  totalSteps: number;
  onFinish?: () => void;
};

export function useStepNavigation({
  totalSteps,
  onFinish,
}: StepNavigationConfig) {
  const [currentStep, setCurrentStep] = useState(0);

  const goNext = useCallback(() => {
    setCurrentStep((prev) => {
      const next = prev + 1;
      if (next >= totalSteps) {
        onFinish?.();
        return prev;
      }
      return next;
    });
  }, [totalSteps, onFinish]);

  const goBack = useCallback(() => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const isFirst = currentStep === 0;
  const isLast = currentStep === totalSteps - 1;

  return { currentStep, goNext, goBack, isFirst, isLast };
}
