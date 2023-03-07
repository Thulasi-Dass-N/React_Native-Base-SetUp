import { StyleSheet, Text, Image, View, Pressable } from "react-native";
import React from "react";

import { BACK_ARROW } from "../../utils/snapShots";

const BackButton = ({ goBack, title }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={goBack} style={styles.backContainer}>
        <Image source={BACK_ARROW} style={styles.backIcon} />
        <Text style={styles.text}>Back</Text>
      </Pressable>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.backContainer}>{/* <Text></Text> */}</View>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    top: 75,
    zIndex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
  },
  backIcon: {
    marginRight: 8,
    width: 23,
    height: 23,
    resizeMode: "cover",
    tintColor: "",
  },
  text: {
    color: "black",
    fontSize: 18,
  },
  title: {
    color: "black",
    fontSize: 25,
  },
  titleContainer: {
    alignItems: "center",
    width: "60%",
  },
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "20%",
  },
});
