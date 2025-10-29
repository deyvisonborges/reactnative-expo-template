import { usePathname, useRouter } from "expo-router";

export function useStepRouter(steps: string[], onFinish: () => void) {
  const router = useRouter();
  const pathname = usePathname();

  // Remove barra inicial para comparar com steps
  const currentPath = pathname.replace(/^\/+/, "");
  const currentIndex = steps.findIndex((s) => currentPath === s);

  const goNext = () => {
    if (currentIndex < 0) return;

    if (currentIndex < steps.length - 1) {
      const nextStep = steps[currentIndex + 1];
      router.replace(`/${nextStep}` as any);
    } else {
      onFinish();
    }
  };

  const goBack = () => {
    if (currentIndex === 0) router.canGoBack();

    if (currentIndex > 0) {
      const prevStep = steps[currentIndex - 1];
      router.replace(`/${prevStep}` as any);
    } else {
      router.back();
    }
  };

  return {
    currentIndex,
    goNext,
    goBack,
    isFirst: currentIndex <= 0,
    isLast: currentIndex === steps.length - 1,
    currentStep: steps[currentIndex] || "",
  };
}
