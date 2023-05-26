import React from "react";
import AppTheme from "./src/theme/AppTheme";
import AppStack from "./src/routes/AppStack";
import Toast from "react-native-toast-message";
import { toastConfig } from "./src/components/atoms/Toast";

function App() {
  return (
    <AppTheme>
      <AppStack />
      <Toast config={toastConfig}  />
    </AppTheme>
  );
}

export default App;
