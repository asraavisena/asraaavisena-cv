import React from "react";

export const ThemeContext = React.createContext();

export default function ThemeProvider(props) {
  const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedPrefs = window.localStorage.getItem("color-theme");
      if (typeof storedPrefs === "string") {
        return storedPrefs;
      }

      const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
      if (userMedia.matches) {
        return "dark";
      }
    }

    return "light"; // light theme as the default;
  };
  const [theme, setTheme] = React.useState(getInitialTheme);

  const rawSetTheme = (rawTheme) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  if (props.initialTheme) {
    rawSetTheme(props.initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
