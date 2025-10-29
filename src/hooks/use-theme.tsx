import { Colors } from "@/constants/theme";
import { tokens } from "@/lib/@tokens/src/tokens";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { Appearance } from "react-native";

type ThemeContextType = {
  theme: typeof Colors.light | typeof Colors.dark;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
  tokens: typeof tokens.light | typeof tokens.dark;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [isDark, setIsDark] = useState(Appearance.getColorScheme() === "dark");

  const theme = isDark ? Colors.dark : Colors.light;
  const themeTokens = isDark ? tokens.dark || tokens.light : tokens.light;

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDark(colorScheme === "dark");
    });
    return () => subscription.remove();
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, isDark, setIsDark, tokens: themeTokens }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
