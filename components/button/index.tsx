import { useMemo } from "react";
import {
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
  color,
  disabled,
  size,
  variant,
  styles: customStyles,
}: ButtonProps) {
  const styles = useMemo(
    () => buttonStyles({ color, size, variant, disabled }),
    [color, disabled, size, variant]
  );

  // const styles = useStyle(buttonStyles, { color, size, variant, disabled });

  return (
    <TouchableOpacity style={[styles.button, customStyles]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

// export const buttonStyles = (
//   props: Pick<ButtonProps, "variant" | "color" | "size" | "disabled">
// ) => {
//   const getBackgroundColor = (): string => {
//     if (props.variant === "outline" || props.variant === "link")
//       return "transparent";
//     switch (props.color) {
//       case "secondary":
//         return "#6c757d";
//       case "danger":
//         return "#dc3545";
//       case "success":
//         return "#28a745";
//       default:
//         return "#007bff";
//     }
//   };

//   const getTextColor = (): string => {
//     if (props.variant === "solid") return "#fff";
//     switch (props.color) {
//       case "secondary":
//         return "#6c757d";
//       case "danger":
//         return "#dc3545";
//       case "success":
//         return "#28a745";
//       default:
//         return "#007bff";
//     }
//   };

//   const getPadding = (): number => {
//     switch (props.size) {
//       case "small":
//         return 8;
//       case "large":
//         return 16;
//       default:
//         return 12;
//     }
//   };

//   const getHeight = (): number => {
//     switch (props.size) {
//       case "small":
//         return 32;
//       case "large":
//         return 48;
//       default:
//         return 40;
//     }
//   };

//   return StyleSheet.create({
//     button: {
//       backgroundColor: getBackgroundColor(),
//       borderColor: props.variant === "outline" ? getTextColor() : "transparent",
//       borderWidth: props.variant === "outline" ? 1.5 : 0,
//       paddingVertical: getPadding(),
//       paddingHorizontal: getPadding() * 2,
//       borderRadius: 8,
//       alignItems: "center",
//       justifyContent: "center",
//       opacity: props.disabled ? 0.6 : 1,
//       height: getHeight(),
//     },
//   });
// };

export const buttonStyles = (
  props: Pick<ButtonProps, "variant" | "color" | "size" | "disabled">
) => {
  const isOutline = props.variant === "outline";
  const isLink = props.variant === "link";

  const colorMap = {
    primary: "#007bff",
    secondary: "#6c757d",
    danger: "#dc3545",
    success: "#28a745",
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
  });
};
