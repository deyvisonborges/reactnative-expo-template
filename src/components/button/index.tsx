import { useTheme } from "@/hooks/use-theme";
import { useMemo } from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

export type ButtonVariant = "solid" | "outline" | "link";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonAction = "submit" | "reset" | "button";
export type ButtonColor = "primary" | "secondary" | "danger" | "success";

type ButtonProps = {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  action?: ButtonAction;
  disabled?: boolean;
  loading?: boolean;
  styles?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export function Button({
  title,
  color = "primary",
  disabled = false,
  size = "medium",
  variant = "solid",
  loading = false,
  styles: customStyles,
  onPress,
}: ButtonProps) {
  const { theme, tokens } = useTheme();

  const styles = useMemo(
    () => buttonStyles({ color, size, variant, disabled, theme, tokens }),
    [color, disabled, size, variant, theme, tokens]
  );

  return (
    <TouchableOpacity
      style={[styles.button, customStyles]}
      onPress={onPress}
      disabled={disabled || loading}
      accessibilityRole="button"
      accessibilityLabel={title}
      accessibilityState={{ disabled: disabled || loading }}
    >
      {loading ? (
        <ActivityIndicator color={styles.text.color} size="small" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

export const buttonStyles = (
  props: Pick<ButtonProps, "variant" | "color" | "size" | "disabled"> & {
    theme: any;
    tokens: any;
  }
) => {
  const isOutline = props.variant === "outline";
  const isLink = props.variant === "link";

  const colorMap = {
    primary: props.tokens?.color?.feedback?.informative?.[500] || "#0da6f2",
    secondary: props.tokens?.color?.neutral?.darkness?.[600] || "#6e6e6e",
    danger: props.tokens?.color?.feedback?.error?.[500] || "#ef4444",
    success: props.tokens?.color?.feedback?.success?.[500] || "#489766",
  } as const;

  const baseColor = colorMap[props.color ?? "primary"];
  const textColor = props.variant === "solid" ? "#fff" : baseColor;
  const backgroundColor = isOutline || isLink ? "transparent" : baseColor;

  const sizeMap = { small: 8, medium: 12, large: 16 } as const;
  const padding = sizeMap[props.size ?? "medium"];

  const heightMap = { small: 32, medium: 40, large: 48 } as const;
  const height = heightMap[props.size ?? "medium"];

  return StyleSheet.create({
    button: {
      backgroundColor,
      borderColor: isOutline ? textColor : "transparent",
      borderWidth: isOutline ? 1.5 : 0,
      paddingVertical: padding,
      paddingHorizontal: padding * 2,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      opacity: props.disabled ? 0.6 : 1,
      height,
    },
    text: {
      color: textColor,
      fontSize: 16,
      fontWeight: "600",
    },
  });
};
