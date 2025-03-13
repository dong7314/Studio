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
  "@media": {
    "screen and (max-width: 1020px)": {
      width: "720px",
    },
    "screen and (max-width: 830px)": {
      width: "600px",
    },
    "screen and (max-width: 670px)": {
      width: "95%",
    },
  },
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
  "@media": {
    "screen and (max-width: 1020px)": {
      width: "700px",
    },
    "screen and (max-width: 830px)": {
      width: "580px",
    },
    "screen and (max-width: 670px)": {
      width: "87%",
    },
  },
});

export const changeIcon = style({
  position: "fixed",
  top: "-140px",
  left: "-140px",
  "@media": {
    "screen and (max-width: 1340px)": {
      display: "none",
    },
  },
});

export const scroll = style({
  position: "fixed",
  left: "0",
  top: "0",
  height: "12px",
  transition: "background 0.15s ease-out",
  "@media": {
    "screen and (max-width: 700px)": {
      height: "8px",
    },
  },
});

export const seperate = style({
  width: "820px",
  height: "1px",
  backgroundColor: "#F2F2F2",
  "@media": {
    "screen and (max-width: 1020px)": {
      width: "640px",
    },
    "screen and (max-width: 830px)": {
      width: "550px",
    },
  },
});

export const toggleButton = style({
  position: "fixed",
  right: "42px",
  top: "36px",
  "@media": {
    "screen and (max-width: 700px)": {
      right: "30px",
      top: "24px",
    },
  },
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
    "@media": {
      "screen and (max-width: 1020px)": {
        fontSize: "56px",
      },
      "screen and (max-width: 830px)": {
        fontSize: "42px",
      },
    },
  },
]);

export const header2 = style([
  textStyle,
  {
    position: "relative",
    fontSize: "48px",
    margin: "64px 0 32px 0",
    "@media": {
      "screen and (max-width: 1020px)": {
        fontSize: "36px",
      },
      "screen and (max-width: 830px)": {
        margin: "48px 0 24px 0",
        fontSize: "32px",
      },
    },
  },
]);

export const header3 = style([
  textStyle,
  {
    fontSize: "32px",
    margin: "0 0 16px",
    "@media": {
      "screen and (max-width: 1020px)": {
        fontSize: "24px",
      },
    },
  },
]);

export const header4 = style([header3]);

export const header5 = style([
  textStyle,
  {
    fontSize: "21px",
    margin: "0 0 8px",
    "@media": {
      "screen and (max-width: 1020px)": {
        fontSize: "18px",
      },
    },
  },
]);

export const headerDescription = style([
  textStyle,
  {
    fontSize: "30px",
    fontWeight: 500,
    lineHeight: "145%",
    marginBlock: "20px",
    "@media": {
      "screen and (max-width: 1020px)": {
        fontSize: "24px",
      },
      "screen and (max-width: 830px)": {
        fontSize: "21px",
      },
    },
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
    "@media": {
      "screen and (max-width: 1020px)": {
        fontSize: "14px",
      },
    },
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
    "@media": {
      "screen and (max-width: 1020px)": {
        fontSize: "15.5px",
      },
    },
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
    "@media": {
      "screen and (max-width: 1020px)": {
        fontSize: "15.5px",
      },
    },
  },
]);

export const liSpan = style([
  textStyle, {
    display: "inline-block",
    marginBottom: "6px"
  }
])

export const sideProject = style({
  "@media": {
    "screen and (max-width: 830px)": {
      marginBottom: "36px",
    },
  },
});

export const row = style({
  display: "flex",
  paddingBlock: "48px",
  "@media": {
    "screen and (max-width: 830px)": {
      width: "100%",
      paddingBlock: "30px",
      flexDirection: "column",
    },
  },
});

export const left = style({
  display: "flex",
  flexDirection: "column",
  width: "300px",
  paddingRight: "16px",
  boxSizing: "border-box",
  "@media": {
    "screen and (max-width: 830px)": {
      width: "100%",
    },
  },
});

export const right = style({
  display: "flex",
  flexDirection: "column",
  width: "calc(100% - 300px)",
  "@media": {
    "screen and (max-width: 830px)": {
      width: "100%",
    },
  },
});

export const imageContainer = style({
  width: "100%",
  paddingTop: "24px",
  "@media": {
    "screen and (max-width: 1240px)": {
      display: "none",
    },
  },
});

export const imageBox = style({
  position: "relative",
  marginBottom: "24px",
  minHeight: "142.5px",
});

export const img = style({
  width: "90%",
  height: "auto",
  border: "1px solid #e6e6e6",
  borderRadius: "6px",
  transition: "all .15s ease",
  ":hover": {
    position: "absolute",
    transform: "scale(2.25)",
    cursor: "pointer",
    zIndex: "1",
    border: "1px solid #F2F2F2",
    boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.08)",
  },
});
