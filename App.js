import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppSearch from "molecules/AppSearch";

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <AppSearch />

      <Text styles={styles.text}>Hello</Text>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 45,
    backgroundColor: "black",
    justifyContent: "center",
    paddingHorizontal: 30,
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "green",
  },
  text: {
    color: "white",
    fontFamily: "ClashDisplay-Regular",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "400",
  },
});
