import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import drawerList from "../../utils/drawerItem";
import DrawerView from "./DrawerView";

const DrawerElements = ({ navigation }) => {
  const options = id => {
    switch (id) {
      case 1:
        navigation.navigate("Feed");
        break;
      case 2:
        navigation.navigate("Article");
        break;
      case 3:
        navigation.navigate("Notification");
        break;

      default:
        navigation.navigate("Feed");
        break;
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={drawerList}
        renderItem={({ item }) => {
          return <DrawerView item={item} onPress={() => options(item.id)} />;
        }}
      />
    </View>
  );
};

export default DrawerElements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 30,
    marginTop: 100,
  },
});
