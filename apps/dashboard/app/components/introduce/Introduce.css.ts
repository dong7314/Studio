import { style } from "@vanilla-extract/css";
import { themeVars } from "~/theme.css";

export const introContainer = style({
  display: "flex",
  justifyContent: "center",
  position: "relative",
  paddingTop: "32px",
});

export const introSection = style({
  display: "flex",
  flexDirection: "column",
  width: "860px",
  paddingInline: "25px",
  boxSizing: "border-box",
});

export const scroll = style({
  position: "fixed",
  left: "0",
  top: "0",
  height: "16px",
  transition: "background 0.15s ease-out",
});

export const toggleButton = style({
  position: "fixed",
  right: "42px",
  top: "36px",
});

export const textStyle = style({
  color: themeVars.color.text,
  fontFamily: "Pretendard",
});

export const pointTextStyle = style({
  color: themeVars.color.point,
});

export const header = style([
  textStyle,
  {
    fontSize: "72px",
  },
]);

export const headerDescription = style([
  textStyle,
  {
    fontSize: "30px",
    fontWeight: 500,
    lineHeight: "145%",
    marginBlock: "20px",
  },
]);
