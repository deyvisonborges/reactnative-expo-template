import { renderSteps } from "@/features/onboarding/onboard.provider";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function OnboardingStepRoute() {
  const { step } = useLocalSearchParams<{ step: string }>();
  return renderSteps[step] ?? <Text>Fallback: Route not defined</Text>;
}
