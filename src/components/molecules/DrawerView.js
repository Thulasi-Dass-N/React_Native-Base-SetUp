import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const DrawerView = ({ item, onPress }) => {

  return (
    <View>
      <View style={styles.item}>
        <Pressable onPress={onPress}>
          <Text style={styles.title}>{item.name}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DrawerView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 30,
    marginTop: 100,
  },
  item: {
    
    marginVertical: 8,
    marginHorizontal: 6,
  },
  title: {
    fontSize: 22,
  },
});
