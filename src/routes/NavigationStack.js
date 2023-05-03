import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Feed from "../screens/Feed";
import Article from "../screens/Article";
import SwipeGesture from "../screens/Notification";
import AppHeader from "../components/molecules/AppHeader";
import { getHeaderTitle } from "@react-navigation/elements";

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerTransparent: true,
          header: ({ navigation, options, route }) => {
            const title = getHeaderTitle(options, route.name);
            return (
              <AppHeader
                title={title}
                navigation={navigation}
                externalStyle={options.headerStyle}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="Article"
        component={Article}
        options={{
          headerTransparent: true,
          header: ({ navigation, options, route }) => {
            const title = getHeaderTitle(options, route.name);
            return (
              <AppHeader
                title={title}
                navigation={navigation}
                externalStyle={options.headerStyle}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="Notification"
        component={SwipeGesture}
        options={{
          headerTransparent: true,
          header: ({ navigation, options, route }) => {
            const title = getHeaderTitle(options, route.name);
            return (
              <AppHeader
                title={title}
                navigation={navigation}
                externalStyle={options.headerStyle}
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;
