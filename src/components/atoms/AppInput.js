import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Pressable,
  Image,
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
      <View
        style={[
          styles.inputcontainer,
          inputcontainerStyle,
          { borderWidth: header ? 0 : 1 },
        ]}>
        <View style={styles.imageContainer}>
          {leftImage && (
            <Pressable onPress={onPress1}>
              <Image source={leftImage} style={styles.image} />
            </Pressable>
          )}
        </View>
        <View style={styles.textContainer}>
          <TextInput
            style={[
              styles.input,
              inputStyle,
              { borderBottomWidth: header ? 1 : 0 },
            ]}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            multiline
            value={value}
            onChangeText={text => {
              onChangeText && onChangeText(text);
            }}
            onChange={onChange}
          />
        </View>
        <View style={styles.imageContainer}>
          {rightImage && (
            <Pressable onPress={onPress2}>
              <Image source={rightImage} style={[styles.image, imageStyle]} />
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: "100%",
  },
  inputcontainer: {
    borderRadius: 30,
    borderColor: "black",
    borderWidth: 2,

    flexDirection: "row",
    alignItems: "center",
    minHeight: 40,
  },
  input: {
    textAlign: "left",
    paddingLeft: 15,
    maxHeight: 100,

    paddingVertical: 5,
    borderBottomColor: "black",
  },

  image: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  imageContainer: {
    width: "10%",
    alignItems: "center",
  },
  textContainer: {
    width: "80%" 
  },
});
