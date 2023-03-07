import React, {useState } from "react";
import {
  useColorScheme,
  // Appearance
} from "react-native";
import { color } from "../theme/color";
export const ApplicationTheme = React.createContext();
const AppTheme = ({children}) => {
  const colorScheme = useColorScheme();
  //   const colorScheme = Appearance.getColorScheme();
  const [isLightTheme, setLightTheme] = useState(
    colorScheme === "dark" ? false : true,
  );
  const toggleTheme = () => setLightTheme(previousState => !previousState);
  const theme = {
    colors: isLightTheme ? color.lightColors : color.DarkColors,
    toggleTheme,
    isLightTheme,
  };
  return (
    <ApplicationTheme.Provider value={theme}>
      {children}
    </ApplicationTheme.Provider>
  );
};

export default AppTheme;
