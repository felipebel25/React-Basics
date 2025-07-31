import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Container } from "./context/Container";

// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
// It creates a global store.
// it allows to access data from anywhere.

const defaultValue = {
  light: {
    background: "white",
    text: "black",
  },
  dark: {
    background: "black",
    text: "white",
  },
};

type ThemeContextType = {
  theme: {
    background: string;
    text: string;
  };
  themes: {
    light: {
      background: string;
      text: string;
    };
    dark: {
      background: string;
      text: string;
    };
  };
  activeTheme: "light" | "dark";
  setThemes: Dispatch<
    SetStateAction<{
      light: {
        background: string;
        text: string;
      };
      dark: {
        background: string;
        text: string;
      };
    }>
  >;
  setActiveTheme: Dispatch<SetStateAction<"light" | "dark">>;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const HookUseContext = () => {
  const [themes, setThemes] = useState(defaultValue);
  const [activeTheme, setActiveTheme] = useState<"light" | "dark">("light");

  const theme = themes[activeTheme];

  const toggleTheme = () =>
    setActiveTheme(activeTheme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themes,
        setThemes,
        activeTheme,
        setActiveTheme,
        toggleTheme,
      }}
    >
      <Container />
    </ThemeContext.Provider>
  );
};
