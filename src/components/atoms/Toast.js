import { View, Text, Image } from "react-native";
import React from "react";
import { GEAR } from "../../utils/snapShots";

const ToastTemplete = ({ bgColor, text }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: bgColor,
        paddingLeft: 10,
        paddingVertical: 15,
      }}>
      {bgColor == "red" ? (
        <Image style={{ height: 20, width: 20 }} source={GEAR} />
      ) : null}

      <Text
        style={{
          color: "white",
          fontWeight: "500",
          marginLeft: 10,
          overflowWrap: "break-word",
          marginRight: 19,
        }}>
        {text}
      </Text>
    </View>
  );
};

export const toastConfig = {
  Error: ({ text1, type }) => (
    <ToastTemplete bgColor="red" text={text1} type={type} />
  ),
  Success: ({ text1, type }) => (
    <ToastTemplete bgColor="green" text={text1} type={type}  />
  ),
};


