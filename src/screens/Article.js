import { View, Text, Pressable, TextInput } from "react-native";
import React from "react";

const Article = ({ navigation }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Article</Text>
      </Pressable>
      <TextInput
        style={{
          borderColor: "black",
          borderWidth: 2,
          width:"80%",
          height:40,
          marginVertical:20,
          borderRadius:10
          
        }}
      />
    </View>
  );
};

export default Article;
