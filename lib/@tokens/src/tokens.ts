export const tokens = {
  light: {
    color: {
      neutral: {
        brightness: {
          0: "#a6a6a6",
          50: "#afafaf",
          100: "#bababa",
          200: "#c5c5c5",
          300: "#d4d4d4",
          400: "#dddddd",
          500: "#e6e6e6",
          600: "#f0f0f0",
          700: "#fafafa",
          800: "#fdfdfd",
          900: "#fef9f9",
          950: "#fdfcfc",
        },
        darkness: {
          0: "#141414",
          50: "#171717",
          100: "#1f1f1f",
          200: "#272727",
          300: "#2c2c2c",
          400: "#383939",
          500: "#3f4040",
          600: "#565656",
          700: "#6e6e6e",
          800: "#878787",
          900: "#969696",
          950: "#a4a4a4",
        },
      },
      feedback: {
        error: {
          0: "#531313",
          50: "#7f1d1d",
          100: "#991b1b",
          200: "#b91c1c",
          300: "#dc2626",
          400: "#e63535",
          500: "#ef4444",
          600: "#f96160",
          700: "#e55b5a",
          800: "#fecaca",
          900: "#fee2e2",
          950: "#fee9e9",
        },
        success: {
          0: "#1b3224",
          50: "#14532d",
          100: "#166534",
          200: "#206f3e",
          300: "#2a7948",
          400: "#348352",
          500: "#489766",
          600: "#66b584",
          700: "#84d3a2",
          800: "#a2f1c0",
          900: "#caffe8",
          950: "#e4fff4",
        },
        warning: {
          0: "#542d12",
          50: "#6c3813",
          100: "#824417",
          200: "#b45a1a",
          300: "#d76c1f",
          400: "#e77828",
          500: "#fb954b",
          600: "#fdad74",
          700: "#fecdaa",
          800: "#ffe7d5",
          900: "#fff4ed",
          950: "#fff9f5",
        },
        informative: {
          0: "#032638",
          50: "#05405d",
          100: "#075a83",
          200: "#0973a8",
          300: "#0b8dcd",
          400: "#0da6f2",
          500: "#32b4f4",
          600: "#57c2f6",
          700: "#7ccff8",
          800: "#a2ddfa",
          900: "#c7ebfc",
          950: "#ecf8fe",
        },
      },
    },
  },
  dark: {},
};

export const SPACINGS = {
  4: "4px",
  8: "8px",
  16: "16px",
  24: "24px",
  32: "32px",
  48: "48px",
};

export const FONT_SIZES = {
  12: 12,
  14: 14,
  16: 16,
  18: 18,
  20: 20,
  24: 24,
  30: 30,
};

export const FONT_WEIGHTS = {
  regular: "normal",
  medium: "500",
  bold: "bold",
};
export const BORDER_RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 20,
  round: 9999,
};

export type Tokens = typeof tokens;
