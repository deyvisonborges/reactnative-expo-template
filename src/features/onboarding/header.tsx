import { Typography } from "@/components/typography";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { renderSteps, useOnboarding } from "./onboard.provider";

export function OnboardingHeader() {
  const insets = useSafeAreaInsets();
  const { currentStep, goNext, goBack, isFirst, isLast, stepsLength } =
    useOnboarding();

  const { step } = useLocalSearchParams<{ step: string }>();

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
          {renderSteps[step].props.title}
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
