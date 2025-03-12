import { style } from "@vanilla-extract/css";
import { themeVars } from "~/theme.css";

export const main = style({
  width: "100vw",
  height: "100vh",
  background: themeVars.color.background,
  transition: "background .2s ease-out",
  overflowX: "hidden",
  overflowY: "auto",
});
