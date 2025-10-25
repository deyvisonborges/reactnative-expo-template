import { FlexStyle } from "react-native";
import { renderDynamicStyle } from "../render-dynamic-style";

type Flex = FlexStyle;

const f: Flex = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
};

describe("Flex", () => {
  const render = renderDynamicStyle(f);
  it("should return flex component", () => {
    console.log(JSON.stringify(render, null, 2));
  });
});
