import { tokens } from "./tokens";

export const themes = {
  default: { ...tokens },
  parceiroX: {
    ...tokens,
    light: {
      ...tokens.light,
      color: {
        ...tokens.light.color,
        feedback: {
          ...tokens.light.color.feedback,
          success: { base: "#00c851" }, // cor customizada pro parceiro
        },
      },
    },
  },
};

export type ThemeName = keyof typeof themes;
