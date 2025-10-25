import { createContext, PropsWithChildren, useState } from "react";

export const OnboardingContext = createContext(
  {} as {
    skipOnboarding: () => void;
    completeOnboarding: () => void;
  }
);

export const OnboardingProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const skipOnboarding = () => {
    // Implement skip onboarding logic here
  };

  const completeOnboarding = () => {
    // Implement complete onboarding logic here
  };

  return (
    <OnboardingContext.Provider
      value={{
        skipOnboarding,
        completeOnboarding,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};
