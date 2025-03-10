import { style } from "@vanilla-extract/css";
import { themeVars } from "~/theme.css";

export const button = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "48px",
  height: "48px",
  backgroundColor: "transparent",
  borderRadius: "50%",
  transition: "background-color .2s ease-out",
  ":hover": {
    cursor: "pointer",
    backgroundColor: themeVars.color.shadow,
  },
});
