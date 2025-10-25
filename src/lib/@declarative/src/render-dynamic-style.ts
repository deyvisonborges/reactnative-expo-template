import { StyleProp, ViewStyle } from "react-native";

export function renderDynamicStyle<T extends Record<string, any>>(
  obj?: T
): StyleProp<ViewStyle> {
  if (!obj) return {};

  const result: Record<string, any> = {};

  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (value !== undefined) result[key] = value;
  });

  return result || {};
}
