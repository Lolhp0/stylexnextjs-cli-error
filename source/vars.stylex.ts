import * as stylex from "@stylexjs/stylex";

export const fonts = stylex.defineVars({
  sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
});

export const colors = stylex.defineVars({
  primary: "#030303",
  secondary: "#151515",
});

export const tokens = stylex.defineVars({
  rounded1: "8px",
  gradAngle: stylex.types.angle("0deg"),
});
