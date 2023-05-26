import { View, Text, Pressable, TextInput } from "react-native";
import React from "react";
import Toast from "react-native-toast-message";

const Article = ({ navigation }) => {
  const showToast = () => {
    Toast.show({
      type: "info",
      text1: "Hello",
      text2: "This is some something 👋",
      onPress: () => {
        navigation.navigate("Feed");
      },
      position: "bottom",
      bottomOffset: 30,
    });
  };
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Pressable
        onPress={() => {
          showToast();
        
        }}>
        <Text>Article</Text>
      </Pressable>
      <TextInput
        style={{
          borderColor: "black",
          borderWidth: 2,
          width: "80%",
          height: 40,
          marginVertical: 20,
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default Article;
