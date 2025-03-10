import { useThemeStore } from "../../store/themeStore";

import * as styles from "./ThemeToggleButton.css";

import DarkIcon from "./icon/DarkIcon";
import LightIcon from "./icon/LightIcon";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div onClick={toggleTheme} className={styles.button}>
      {theme === "light" ? <DarkIcon /> : <LightIcon />}
    </div>
  );
}
