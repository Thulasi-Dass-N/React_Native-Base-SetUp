import {
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import AppInput from "../atoms/AppInput";

import { CANCEL, SEARCH, BACK_ARROW } from "../../utils/snapShots";
const Search = ({
  Title,
  placeholderTextColor,
  // rightImage,
  // leftImage,
  // onPress1,
  // onPress2,
  // onChange,
  // onChangeText,
  // placeholder,
  // value,
  //   searchHeader,
}) => {
  const [isSearchActive, setSearchActive] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const header = Title ? Title : "";
  const search = () => {
    setSearchActive(true);
    setSearchInput("");
  };
  const close = () => {
    setSearchActive(false);
    setSearchInput("");
    Keyboard.dismiss();
  };

  const edit = () => {
    setSearchActive(true);
  };

  return (
    <View styles={[styles.searchContainer]}>
      <View style={{ marginTop: 100 }} />
      {!header ? (
        <AppInput
          rightImage={isSearchActive ? CANCEL : SEARCH}
          onPress2={search}
          leftImage={isSearchActive ? BACK_ARROW : ""}
          onPress1={close}
          placeholder="Search"
          value={searchInput}
          onChange={edit}
          returnKeyType="search"
          placeholderTextColor={placeholderTextColor}
          onChangeText={text => setSearchInput(text)}
          header={header ? header : ""}

          //   ========================

          // rightImage={rightImage}
          // onPress2={onPress2}
          // leftImage={leftImage}
          // onPress1={onPress1}
          // placeholder={placeholder}
          // value={value}
          // onChange={onChange}
          // returnKeyType="search"
          // placeholderTextColor={placeholderTextColor}
          // onChangeText={onChangeText}
          // header={header ? header : ""}
        />
      ) : (
        <>
          {!isSearchActive ? (
            <View style={styles.searchContainer}>
              <Text />
              <Text style={styles.searchHeader}>{header}</Text>
              <Pressable
                onPress={() => setSearchActive(true)}
                // onPress={searchHeader}
              >
                <Image style={styles.searchIcon} source={SEARCH} />
              </Pressable>
            </View>
          ) : (
            <AppInput
              rightImage={isSearchActive ? CANCEL : SEARCH}
              onPress2={search}
              leftImage={isSearchActive ? BACK_ARROW : ""}
              onPress1={close}
              placeholder="Search"
              value={searchInput}
              onChange={edit}
              returnKeyType="search"
              placeholderTextColor={placeholderTextColor}
              onChangeText={text => setSearchInput(text)}
              header={header ? header : ""}

              // ====================================

              // rightImage={rightImage}
              // onPress2={onPress2}
              // leftImage={leftImage}
              // onPress1={onPress1}
              // placeholder={placeholder}
              // value={value}
              // onChange={onChange}
              // returnKeyType="search"
              // placeholderTextColor={placeholderTextColor}
              // onChangeText={onChangeText}
              // header={header ? header : ""}
            />
          )}
        </>
      )}
    </View>
  );
};
export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "space-between",
    alignItems: "center",
    height: 31,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: "",
  },

  searchHeader: {
    color: "",
    textTransform: "capitalize",
    marginLeft: 10,
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 18,
  },
});
