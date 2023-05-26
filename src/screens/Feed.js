import { View, Button } from "react-native";
import React from "react";
import Toast from "react-native-toast-message";

const Feed = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 100,
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Button
        title="Show toast"
        onPress={() => {
          Toast.show({
            type: "success",
            text1: "Sucessfully",
            text2: "This is some something 👋",
            onHide: () => {
              // navigation.navigate("Article");
            },
            onShow: () => {
              // navigation.navigate("Article");
            },
            position: "top",
            topOffset: 40,
          });
        }}
      />
    </View>
  );
};

export default Feed;
