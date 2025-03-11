import { style } from "@vanilla-extract/css";
import { themeVars } from "~/theme.css";

export const introContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  paddingTop: "48px",
});

export const introSection = style({
  display: "flex",
  flexDirection: "column",
  width: "880px",
  paddingInline: "25px",
  boxSizing: "border-box",
});

export const mainSection = style({
  display: "flex",
  flexDirection: "column",
  width: "860px",
  paddingInline: "32px",
  boxSizing: "border-box",
  selectors: {
    "&:nth-last-of-type(1)": {
      marginBottom: "96px",
    },
  },
});

export const changeIcon = style({
  position: "fixed",
  top: "-120px",
  left: "-120px",
});

export const scroll = style({
  position: "fixed",
  left: "0",
  top: "0",
  height: "12px",
  transition: "background 0.15s ease-out",
});

export const seperate = style({
  width: "820px",
  height: "1px",
  backgroundColor: "#F2F2F2",
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

export const headerPoint = style({
  position: "absolute",
  top: "-14px",
  left: "-24px",
  color: themeVars.color.point,
});

export const header = style([
  textStyle,
  {
    fontSize: "72px",
    marginBottom: "64px",
  },
]);

export const header2 = style([
  textStyle,
  {
    position: "relative",
    fontSize: "48px",
    margin: "64px 0 32px 0",
  },
]);

export const header3 = style([
  textStyle,
  {
    fontSize: "32px",
    margin: "0 0 16px",
  },
]);

export const header4 = style([header3]);

export const header5 = style([
  textStyle,
  {
    fontSize: "21px",
    margin: "0 0 8px",
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

export const project = style({
  paddingBlock: "24px",
  selectors: {
    "&:nth-of-type(1)": {
      paddingTop: "0",
    },
  },
});

export const other = style({
  paddingBlock: "48px",
});

export const sub = style([
  textStyle,
  {
    display: "block",
    fontSize: "16px",
    marginBottom: "4px",
  },
]);

export const a = style({
  textDecoration: "none",
  color: themeVars.color.point,
  transition: "color .2s ease-out",
  ":hover": {
    color: "#0056D6",
  },
});

export const time = style([
  sub,
  {
    display: "block",
    marginBottom: "24px",
  },
]);

export const p = style([
  textStyle,
  {
    fontSize: "17.5px",
    margin: "0 0 16px",
    lineHeight: "130%",
  },
]);

export const cuttingMargin = style({
  margin: 0,
});

export const ul = style({
  margin: "0 0 16px",
  paddingLeft: "13px",
});

export const li = style([
  textStyle,
  {
    paddingBlock: "4px",
    fontSize: "17.5px",
    "::marker": {
      content: "• ",
      color: themeVars.color.point,
    },
  },
]);

export const row = style({
  display: "flex",
  paddingBlock: "48px",
});

export const left = style({
  display: "flex",
  flexDirection: "column",
  width: "300px",
  paddingRight: "16px",
  boxSizing: "border-box",
});

export const right = style({
  display: "flex",
  flexDirection: "column",
  width: "calc(100% - 300px)",
});
