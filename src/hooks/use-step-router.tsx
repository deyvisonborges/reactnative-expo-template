import { usePathname, useRouter } from "expo-router";

export function useStepRouter(steps: string[], onFinish: () => void) {
  const router = useRouter();
  const pathname = usePathname();

  const currentIndex = steps.findIndex((s) => pathname === s);

  // const goNext = (route: string) => {
  //   if (currentIndex < steps.length - 1 && steps.includes(route as string))
  //     if(route.includes)
  //     router.push(route);
  //   onFinish();
  // };

  const goBack = () => {
    if (currentIndex > 0) router.back();
  };

  return {
    currentIndex,
    // goNext,
    goBack,
    isFirst: currentIndex === 0,
    isLast: currentIndex === steps.length - 1,
  };
}
