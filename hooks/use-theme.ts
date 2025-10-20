import { createContext, PropsWithChildren, useState } from "react";
import { Appearance } from "react-native";

const ThemeContext = createContext({} as any);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [isDark, setIsDark] = useState(Appearance.getColorScheme() === "dark");

  const theme = isDark ? darkTheme : lightTheme;

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDark(colorScheme === "dark");
    });
    return () => subscription.remove();
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);
