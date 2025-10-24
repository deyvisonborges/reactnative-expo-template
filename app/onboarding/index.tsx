import { useRootNavigationState, useRouter } from "expo-router";
import { useEffect } from "react";

export default function OnboardingDefaultRoute() {
  const router = useRouter();
  const rootNavigationState = useRootNavigationState();

  useEffect(() => {
    // Aguarda o layout principal montar
    if (!rootNavigationState?.key) return;

    // Exemplo: lógica para decidir o passo do usuário
    async function redirectToStep() {
      // Aqui você pode buscar do AsyncStorage, API, etc.
      const savedStep = await getUserStep(); // ex: "step2" ou null
      const nextStep = savedStep ?? "step1";

      router.replace(`/onboarding/${nextStep}`);
    }

    redirectToStep();
  }, [rootNavigationState, router]);

  return null;
}

// Exemplo fictício — você pode substituir por AsyncStorage, API, etc.
async function getUserStep() {
  // await AsyncStorage.getItem("onboardingStep")
  return null;
}
