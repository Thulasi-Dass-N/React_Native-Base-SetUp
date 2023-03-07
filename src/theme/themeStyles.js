import useTheme from "./useTheme";

const themeStyles = styles => {
  const theme = useTheme();
  return styles(theme);
};

export default themeStyles;
