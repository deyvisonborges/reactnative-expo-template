import { OnboardingLayout } from "@/features/onboarding/onboard.layout";
import { Step1 } from "@/features/onboarding/step1";
import { Step2 } from "@/features/onboarding/step2";
import { useStepRouter } from "@/hooks/use-step-router";
import { createContext, JSX, ReactNode, useContext } from "react";

interface OnboardingContextType {
  currentStep: number;
  goNext: () => void;
  goBack: () => void;
  isFirst: boolean;
  isLast: boolean;
  stepsLength: number;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined
);

export const renderSteps: Record<string, JSX.Element> = {
  step1: (
    <OnboardingLayout>
      <Step1 />
    </OnboardingLayout>
  ),
  step2: (
    <OnboardingLayout>
      <Step2 />
    </OnboardingLayout>
  ),
};

export function OnboardingProvider({
  totalSteps: _totalSteps,
  onFinish,
  children,
}: {
  totalSteps: number;
  onFinish?: () => void;
  children: ReactNode;
}) {
  // Derive steps from the declared renderSteps to keep everything in sync with routing
  const steps = Object.keys(renderSteps).map(
    (stepKey) => `onboarding/${stepKey}`
  );

  const { currentIndex, goNext, goBack, isFirst, isLast } = useStepRouter(
    steps,
    () => onFinish?.()
  );

  return (
    <OnboardingContext.Provider
      value={{
        currentStep: currentIndex,
        goNext,
        goBack,
        isFirst,
        isLast,
        stepsLength: steps.length,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context)
    throw new Error("useOnboarding must be used within OnboardingProvider");
  return context;
}
