import { Typography } from "@/components/typography";
import { Entypo } from "@expo/vector-icons";
import { goBack } from "expo-router/build/global-state/routing";
import { PropsWithChildren } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useOnboarding } from "./onboard.provider";

export function OnboardingLayout({ children }: Readonly<PropsWithChildren>) {
  const { stepsLength, currentStep } = useOnboarding();

  const dots = Array.from({ length: stepsLength }, (_, index) => (
    <Entypo
      name="dot-single"
      key={index}
      size={24}
      color={index === currentStep ? "green" : "gray"}
    />
  ));

  return (
    <View style={styles.container}>
      {children}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: 16,
          paddingVertical: 16,
        }}
      >
        <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
          {dots}
        </View>
        <TouchableOpacity onPress={goBack}>
          <Typography variant="caption">Skip</Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "purple",
  },
});
