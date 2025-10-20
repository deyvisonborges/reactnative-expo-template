import { DependencyList, useMemo } from "react";
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

export const useStyle = <
  TStyle extends ViewStyle | TextStyle | ImageStyle,
  TOutput extends StyleProp<TStyle>
>(
  styleFactory: () => TOutput,
  _deps: DependencyList = []
): TOutput => useMemo(() => styleFactory(), [styleFactory]);
