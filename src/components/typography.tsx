import { useTheme } from "@/hooks/use-theme";
import React from "react";
import { Text, TextProps } from "react-native";

type FontWeights = "regular" | "medium" | "semibold" | "bold" | "extrabold";
type TypographyVariants = "h1" | "h2" | "h3" | "body" | "caption" | "button";

interface TypographyProps extends TextProps {
  weight?: FontWeights;
  variant?: TypographyVariants;
  children: React.ReactNode;
}

const fontMap = {
  regular: "Sora_400Regular",
  medium: "Sora_500Medium",
  semibold: "Sora_600SemiBold",
  bold: "Sora_700Bold",
  extrabold: "Sora_800ExtraBold",
};

const variantStyles = {
  h1: { fontSize: 32, lineHeight: 40, fontWeight: "bold" as const },
  h2: { fontSize: 24, lineHeight: 32, fontWeight: "bold" as const },
  h3: { fontSize: 20, lineHeight: 28, fontWeight: "600" as const },
  body: { fontSize: 16, lineHeight: 24, fontWeight: "normal" as const },
  caption: { fontSize: 14, lineHeight: 20, fontWeight: "normal" as const },
  button: { fontSize: 16, lineHeight: 24, fontWeight: "600" as const },
};

export function Typography({
  weight = "regular",
  variant = "body",
  style,
  children,
  ...props
}: TypographyProps) {
  const { theme } = useTheme();

  return (
    <Text
      style={[
        { fontFamily: fontMap[weight], color: theme.text },
        variantStyles[variant],
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}
