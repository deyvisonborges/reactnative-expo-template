import { useTheme } from "@/hooks/use-theme";
import { View, type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  backgroundColor?: keyof typeof import("@/constants/theme").Colors.light;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  backgroundColor,
  ...otherProps
}: ThemedViewProps) {
  const { theme } = useTheme();

  const backgroundColorValue = backgroundColor
    ? theme[backgroundColor]
    : lightColor || darkColor;

  return (
    <View
      style={[{ backgroundColor: backgroundColorValue }, style]}
      {...otherProps}
    />
  );
}
