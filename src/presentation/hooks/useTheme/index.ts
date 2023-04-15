import { useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return { theme, toggleTheme };
};