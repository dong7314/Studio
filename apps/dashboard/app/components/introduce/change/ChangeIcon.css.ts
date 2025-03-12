import { style } from "@vanilla-extract/css";

export const changeIconContainer = style({
  position: "relative",
  width: "300px",
  height: "300px",
  transform: "rotate(180deg)",
  transition: "transform .4s ease-out",
});

export const dark = style({
  transform: "rotate(0)",
});

export const sun = style({
  position: "absolute",
  width: "120px",
  top: 0,
  left: 0,
  opacity: "1",
  transition: "opacity .2s ease-out",
});

export const moon = style({
  position: "absolute",
  width: "100px",
  bottom: 0,
  right: 0,
  opacity: "1",
  transition: "opacity .15s ease-out",
});

export const disabled = style({
  opacity: 0,
});
