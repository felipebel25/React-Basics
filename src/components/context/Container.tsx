import { useContext } from "react";
import { ThemeContext } from "../HookUseContext";

export const Container = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.background, color: theme.text }}>
      <p>Hello World! This works with context hook</p>
      <button style={{ background: "gray" }} onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
};
