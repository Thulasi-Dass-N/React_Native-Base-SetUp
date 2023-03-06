import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from "react-native";

const AppInput = ({
  externalStyle,
  placeholder,
  placeholderTextColor,
  onPress2,
  onPress1,
  inputcontainerStyle,
  leftImage,
  rightImage,
  value,
  onChangeText,
  imageStyle,
  onChange,
  inputStyle,
  header,
}) => {
  return (
    <View style={[styles.container, externalStyle]}>
      <View style={[styles.inputcontainer, inputcontainerStyle,{ borderWidth: header ? 0 : 1}]}>
        {leftImage && (
          <Pressable onPress={onPress1}>
            <Image source={leftImage} style={styles.image} />
          </Pressable>
        )}

        <TextInput
          style={[styles.input, inputStyle,{ borderBottomWidth: header ? 1 : 0}]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          multiline
          value={value}
          onChangeText={text => {
            onChangeText && onChangeText(text);
          }}
          onChange={onChange}
        />

        {rightImage && (
          <Pressable onPress={onPress2}>
            <Image
              source={rightImage}
              style={[
                styles.image,
                imageStyle,
                { paddingLeft: leftImage ? 33 : 90 },
              ]}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  inputcontainer: {
    borderRadius: 30,
    borderColor:  "black",
    borderWidth: 2,
    // marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    minHeight: 40,
  },
  input: {
    textAlign: "left",
    paddingLeft: 15,
    maxHeight: 100,
    width: Platform.OS === "android" ? 300 : 280,
    paddingVertical: 5,
    borderBottomColor: "black",
    // borderBottomWidth: 1,
  },

  image: {
    width: 20,
    height: 20,
    paddingLeft: 35,
    resizeMode: "contain",
  },
});
