//chatgpt.com/c/68f5116e-ff6c-832e-bace-7b61c4200eb6
import { ThemeName, themes } from "@/lib/@tokens/src/theme";
import { ExpiredStorage } from "@/storage/expired-localstorage";

import { useColorScheme } from "@/hooks/use-color-scheme";
type UseThemeColorProps = Partial<Record<any, string>> & {
  themeName?: ThemeName; // opcional — pode forçar um tema específico
};
type ThemeMode = "light" | "dark";

const storageKeys = {
  multitheme: "app:multitheme",
};

export function useThemeColor(
  props: UseThemeColorProps,
  colorName: keyof (typeof themes)["default"]["light"]
) {
  const colorScheme = useColorScheme() ?? "light";

  // tenta pegar tema ativo do storage
  const storedTheme = ExpiredStorage.getItemWithExpiry(
    storageKeys.multitheme
  ) as unknown as ThemeName | null;

  const currentThemeName = props.themeName ?? storedTheme ?? "default";

  const currentTheme = themes[currentThemeName];
  const themeVariant = currentTheme[colorScheme as ThemeMode];

  // Se o usuário passou override via props (light/dark), respeita
  const colorFromProps = props[colorScheme];
  if (colorFromProps) return colorFromProps;

  // Se o tema atual não tiver a cor, faz fallback pro tema default
  if (!(themeVariant as any)[colorName]) {
    return (themes.default[colorScheme as ThemeMode] as any)[colorName];
  }

  return (themeVariant as any)[colorName];
}
