import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import AppAlert from "../components/molecules/AppAlert";

const Feed = ({ navigation }) => {
  const [alertView, setAlertView] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        marginTop: 100,
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Pressable
        onPress={() => {
          setAlertView(true);
          // <AppAlert Title="Alert123!!!" AlertMessage="gfhfhgfjhffhjfhj" />;
          // navigation.navigate("Article");
        }}>
        <Text>feed</Text>
      </Pressable>
      <AppAlert
        Alert="How May I Help You"
        visible={alertView}
        onRequestClose={() => {
          setAlertView(false);
        }}
        SuccessName={"Yes!"}
        CancelName={"No"}
        SuccessButton={() => {
          navigation.navigate("Article");
          setAlertView(false);
        }}
        CancelButton={() => {
          setAlertView(false);
        }}
      />
    </View>
  );
};

export default Feed;
