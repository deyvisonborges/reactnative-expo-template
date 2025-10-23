import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { Step1 } from "./step1";

export default function OnboardingStepRoute() {
  const { step } = useLocalSearchParams();

  const renderStep = () => {
    switch (step) {
      case "step1":
        return <Step1 />;
      // You can add more steps here (e.g., step2, step3, etc.)
      default:
        return <Text>Step not found</Text>;
    }
  };

  return renderStep();
}
