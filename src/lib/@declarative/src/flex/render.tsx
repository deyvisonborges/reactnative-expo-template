// components/Flex/index.tsx
import React from "react";
import { FlexStyle, StyleSheet, View, ViewStyle } from "react-native";
import { renderDynamicStyle } from "../render-dynamic-style";
import { FlexProps } from "./types";

export type FlexProps = {
  _flex?: ViewStyle;
  _spacing?: Partial<{
    padding?: number;
    margin?: number;
    gap?: number;
  }>;
  style?: ViewStyle;
  children?: React.ReactNode;
};

export const Flex: React.FC<FlexProps> = ({
  _flex,
  _spacing,
  style,
  children,
}) => {
  const dynamicStyle = {
    ...(renderDynamicStyle(_flex) ?? {}),
    ...(renderDynamicStyle(_spacing) ?? {}),
  };

  return <View style={[styles.default, dynamicStyle, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  default: {
    display: "flex",
  },
});

export function renderFlex(props: FlexStyle) {
  return renderDynamicStyle(props);
}
