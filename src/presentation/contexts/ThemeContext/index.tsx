import { createContext, useContext } from "react";
import { useTheme } from "@/presentation/hooks/useTheme";

interface themeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<{
  theme: boolean;
  setTheme: (theme: boolean) => void;
}>({
  theme: false,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: themeProviderProps) => {
  const { theme, toggleTheme } = useTheme();
  const setTheme = () => toggleTheme();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeValue = () => useContext(ThemeContext).theme;
export const useThemeSetter = () => useContext(ThemeContext).setTheme;
