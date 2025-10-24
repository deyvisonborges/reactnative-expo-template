import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* <Stack screenOptions={{ headerShown: false, headerShadowVisible: false }}> */}
      <Stack.Screen name="index" />
      <Stack.Screen
        name="[step]/index"
        options={({ route }) => {
          // @ts-ignore
          const step = route?.params?.step;

          let title = "Onboarding";
          if (step === "step1") title = "Bem-vindo!";
          else if (step === "step2") title = "Permissões";
          else if (step === "step3") title = "Finalização";

          return {
            title,
            // header: () => <Header />,
            headerShown: true,
            headerShadowVisible: false,
          };
        }}
      />
    </Stack>
  );
}
