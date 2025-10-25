import { Step1 } from "@/components/step1";
import { Step2 } from "@/components/step2";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function OnboardingStepRoute() {
  const { step } = useLocalSearchParams();

  const renderStep = () => {
    switch (step) {
      case "step1":
        return <Step1 />;
      case "step2":
        return <Step2 />;
      // You can add more steps here (e.g., step2, step3, etc.)
      default:
        return <Text>Step not found</Text>;
    }
  };

  return renderStep();
}
