import { LoadingPage } from "@/components/loading.page";
import { useRootNavigationState, useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function OnboardingDefaultRoute() {
  const router = useRouter();
  const rootNavigationState = useRootNavigationState();

  const [loading, setLoading] = useState(true);

  // Exemplo fictício — você pode substituir por AsyncStorage, API, etc.
  async function getUserStep() {
    // await AsyncStorage.getItem("onboardingStep")
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve("step1");
      }, 3000)
    );
    setLoading(false);

    return "step1";
  }

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

  if (loading) {
    return <LoadingPage />;
  }

  return null;
}
