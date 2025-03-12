import { style } from "@vanilla-extract/css";

export const svg = style({
  width: "32px",
  height: "32px",
  "@media": {
    "screen and (max-width: 700px)": {
      width: "24px",
      height: "24px",
    },
  },
});
