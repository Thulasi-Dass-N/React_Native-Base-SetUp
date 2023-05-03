import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { BACKGROUND_IMAGE} from "images/snapShots";



const App = () => {
  return (
    <View style={styles.Maincontainer}>
      <View style={styles.cardview}>
        <ImageBackground
          source={BACKGROUND_IMAGE}
          resizeMode="cover"
          imageStyle={{ borderRadius: 20 }}
          style={{
            flex: 1,
            justifyContent: "flex-end",
            width: "100%",
          }}>
          <View
            style={{
              marginStart: 20,
              marginTop: 1,
              marginEnd: 10,
              Maxheight: "70%",
            }}>
            <View style={{ marginBottom: 1 }}>
              <Text style={{ color: "green", fontSize: 23, marginBottom: 10 }}>
                My-APP
              </Text>
            </View>
            <View tyle={{ marginBottom: 1 }}>
              <Text
                style={{ color: "red", fontSize: 19, marginBottom: 10 }}
                numberOfLines={2}>
                that we like, but there are many others, including some in
                different languages.
              </Text>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text
                style={{ color: "red", fontSize: 19, marginBottom: 10 }}
                numberOfLines={2}>
                Note that many people make
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                height: 40,
                width: "80%",
                alignItems: "center",
                marginBottom: 10,
              }}>
              <ImageBackground
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "black",
                }}

                //  source={BACKGROUND_IMAGE}
              >
                <Text style={{ color: "white" }}>Hello</Text>
              </ImageBackground>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardview: {
    width: "80%",
    height: "60%",
    backgroundColor: "#FFFFE0",
    borderWidth: 0.5,
    alignItems: "center",
    borderRadius: 20,
  },
});
