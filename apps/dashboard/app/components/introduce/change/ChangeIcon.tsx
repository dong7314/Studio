import { composeStyles } from "@vanilla-extract/css";
import { useThemeStore } from "~/store/themeStore";

import * as styles from "./ChangeIcon.css";

export default function ChangeIcon() {
  const { theme } = useThemeStore();

  return (
    <div
      className={composeStyles(
        styles.changeIconContainer,
        theme === "dark" ? styles.dark : ""
      )}
    >
      <img
        className={composeStyles(
          styles.sun,
          theme === "dark" ? styles.disabled : ""
        )}
        src="/public/sun.png"
      />
      <img
        className={composeStyles(
          styles.moon,
          theme === "light" ? styles.disabled : ""
        )}
        src="/public/moon.png"
      />
    </div>
  );
}
