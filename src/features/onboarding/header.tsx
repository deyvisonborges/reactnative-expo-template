import { Typography } from "@/components/typography";
import { useStepRouter } from "@/hooks/use-step-router";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function OnboardingHeader() {
  const insets = useSafeAreaInsets();

  const steps = ["onboarding/step1", "onboarding/step2", "onboarding/step3"];
  const { currentStep, goNext, goBack, isFirst, isLast } = useStepRouter(
    steps,
    () => console.log("Onboarding finalizado")
  );

  return (
    <View
      style={{
        backgroundColor: "red",
        paddingTop: insets.top,
        height: insets.top + 56, // ALTURA FIXA DO HEADER ✅
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        {!isFirst && (
          <TouchableOpacity onPress={goBack}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
        )}

        <Typography style={{ flex: 1, textAlign: "center" }}>
          {currentStep}
        </Typography>

        {!isLast && (
          <TouchableOpacity onPress={goNext}>
            <Ionicons name="chevron-forward" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
