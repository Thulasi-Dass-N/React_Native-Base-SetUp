import { useContext } from "react";
import { ApplicationTheme } from "./AppTheme";

const useTheme = () => {
  const themecontext = useContext(ApplicationTheme);

  if (themecontext === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  //   return useContext(ApplicationTheme);
  return themecontext;
};

export default useTheme;
