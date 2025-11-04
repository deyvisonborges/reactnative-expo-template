import { OnboardingHeader } from "@/features/onboarding/header";
import { OnboardingProvider } from "@/features/onboarding/onboard.provider";
import { useAuth } from "@/hooks/use-auth";
import { Stack } from "expo-router";

/**
 * 📌 Sobre esta rota (`app/onboarding/index.tsx`)
 *
 * Esta tela não é exibida ao usuário — ela funciona como uma rota "intermediária".
 * Sempre que o usuário entra no fluxo de onboarding, esta rota é carregada primeiro.
 *
 * ✅ Objetivo:
 * - Descobrir qual passo do onboarding o usuário deve continuar
 * - Redirecionar automaticamente para o passo correto (ex: `/onboarding/step2`)
 *
 * 💡 Por que não exibimos o `<Stack.Screen name="index" />` no `_layout`?
 * - Porque esta tela não deve aparecer como uma página navegável
 * - Evita flickering e problemas com headers ao dar refresh
 * - Garantimos que apenas os steps reais aparecem na navegação
 *
 * 🔄 Futuro:
 * - Aqui podemos integrar com AsyncStorage ou API para saber o progresso real do usuário
 * - Podemos salvar o passo quando o usuário avança
 *
 * 🎯 Resultado:
 * - Fluxo de onboarding mais fluido
 * - UX consistente mesmo com refresh ou retorno ao app
 *
 * Se precisar modificar o comportamento, este é o lugar certo ✅
 */
// <Stack.Screen name="index" />

export default function OnboardingLayout() {
  const { isAuthenticated } = useAuth();
  return (
    <OnboardingProvider totalSteps={3} onFinish={() => console.log("Fim")}>
      <Stack
        screenOptions={{
          headerShown: true,
          header: () => <OnboardingHeader />, // ✅ header oficial do stack
        }}
      >
        {/* <Stack.Screen name="[step]/index" /> */}
        <Stack.Protected guard={isAuthenticated}>
          <Stack.Screen name="[step]/step1" />
        </Stack.Protected>
      </Stack>
    </OnboardingProvider>
  );
}
