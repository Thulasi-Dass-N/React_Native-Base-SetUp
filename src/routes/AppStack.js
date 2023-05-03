import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./NavigationStack";
import DrawerElements from "../components/molecules/DrawerElements";
const Drawer = createDrawerNavigator();

const getDrawerContent = navigation => {
  return <DrawerElements navigation={navigation} />;
};
const AppStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: "left",
          drawerType: "slide",
          drawerHideStatusBarOnOpen: "true",
          drawerStatusBarAnimation: "fade",
          keyboardDismissMode: "on-drag",
        }}
        drawerContent={({ navigation }) => getDrawerContent(navigation)}>
        <Drawer.Screen
          name="Feed "
          component={NavigationStack}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
