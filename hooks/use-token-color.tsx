// import { useColorScheme } from "@/hooks/use-color-scheme";
// import { themes } from "@/lib/@tokens/src/theme";

// export function useTokenColor(path: string, themeName?: keyof typeof themes) {
//   const colorScheme = useColorScheme() ?? "light";
//   const activeTheme =
//     themeName ||
//     (ExpiredStorage.getItemWithExpiry(
//       storageKeys.multitheme
//     ) as keyof typeof themes) ||
//     "default";

//   const theme = themes[activeTheme][colorScheme];

//   // acessa cor via string path, tipo "color.feedback.error.base"
//   const value = path.split(".").reduce((acc, key) => acc?.[key], theme);

//   if (!value) {
//     console.warn(`Token "${path}" não encontrado no tema "${activeTheme}"`);
//     return "#000000";
//   }

//   return value;
// }
