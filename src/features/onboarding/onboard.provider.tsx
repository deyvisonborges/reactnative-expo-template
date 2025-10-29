import { OnboardingLayout } from "@/features/onboarding/onboard.layout";
import { Step1 } from "@/features/onboarding/step1";
import { Step2 } from "@/features/onboarding/step2";
import { useStepNavigation } from "@/hooks/use-step-navigation";
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
  totalSteps,
  onFinish,
  children,
}: {
  totalSteps: number;
  onFinish?: () => void;
  children: ReactNode;
}) {
  const stepNav = useStepNavigation({ totalSteps, onFinish });

  return (
    <OnboardingContext.Provider value={{ ...stepNav, stepsLength: totalSteps }}>
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
