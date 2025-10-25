import { Stack } from "expo-router";

const STEP_TITLES: Record<string, string> = {
  step1: "Bem-vindo!",
  step2: "Permissões",
  step3: "Finalização",
};

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="[step]/index"
        options={({ route }) => {
          const params = route.params as { step?: string } | undefined;
          const step = params?.step ?? "";
          const title = STEP_TITLES[step] ?? "Onboarding";

          return {
            title,
            headerShown: true,
            headerShadowVisible: false,
          };
        }}
      />
    </Stack>
  );
}
