import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Pressable,
  Keyboard,
} from "react-native";
import React from "react";
import { MENU } from "images/snapShots";
// import useTheme from "../../theme/useTheme";
// import { color } from "../../theme/color";
import themeStyles from "../../theme/themeStyles";

const AppHeader = ({ title, externalStyle, navigation }) => {
//   const theme = useTheme();
  const style = themeStyles(styles);
  return (
    <SafeAreaView style={[style.container, externalStyle]}>
      <View style={{ width: "15%", alignItems: "center" }}>
        <Pressable
          style={{}}
          onPress={() => {
            navigation.toggleDrawer();
            Keyboard.dismiss();
          }}>
          <Image style={style.image} source={MENU} />
        </Pressable>
      </View>
      <View style={{ width: "70%", alignItems: "center" }}>
        <Text style={{ fontSize: 20,}}>
          {title}
        </Text>
      </View>
      <View style={{ width: "15%", alignItems: "center" }}>
        {/* <Text>{title}</Text> */}
      </View>
    </SafeAreaView>
  );
};

export default AppHeader;

const styles = ()=>
  StyleSheet.create({
    image: {
      width: 30,
      height: 25,
      resizeMode: "cover",
    },
    container: {
      width: "100%",
      height: 86,
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      //   backgroundColor: theme.color.BACKGROUND,
    },
  });
