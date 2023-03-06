import React from "react";
import {Text, StyleSheet, Pressable} from "react-native";
const AppButton = ({Title, onPress, externalStyle, titleStyle, otherProps}) => {
  return (
    <Pressable style={[styles.container, externalStyle]} {...otherProps} onPress={onPress}>
      <Text style={[styles.Title, titleStyle]}>{Title}</Text>
    </Pressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 45,
    backgroundColor: "green",
    justifyContent: "center",
    paddingHorizontal: 30,
    alignItems: "center",
    alignSelf: "center",
  },
  Title: {
    color: "white",
    fontFamily: "ClashDisplay-Regular",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "400",
  },
});
