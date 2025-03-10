import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const themeVars = createThemeContract({
  color: {
    text: null,
    point: null,
    shadow: null,
    background: null,
  },
});

export const lightTheme = createTheme(themeVars, {
  color: {
    text: "#262626",
    point: "#3384FF",
    shadow: "rgba(0, 0, 0, 0.08)",
    background: "#ffffff",
  },
});

export const darkTheme = createTheme(themeVars, {
  color: {
    text: "#F7F7F7",
    point: "#66A3FF",
    shadow: "rgba(255, 255, 255, 0.1)",
    background: "#262626",
  },
});
