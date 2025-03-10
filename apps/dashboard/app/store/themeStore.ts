import { create } from "zustand";
import { persist } from "zustand/middleware";
import { lightTheme, darkTheme } from "../theme.css";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  themeClass: string;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "light",
      themeClass: lightTheme,
      toggleTheme: () => {
        const newTheme = get().theme === "light" ? "dark" : "light";
        const newThemeClass = newTheme === "light" ? lightTheme : darkTheme;

        set({ theme: newTheme, themeClass: newThemeClass });

        document.body.classList.remove(lightTheme, darkTheme);
        document.body.classList.add(newThemeClass);
      },
    }),
    { name: "theme-storage" }
  )
);
