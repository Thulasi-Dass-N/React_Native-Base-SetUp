import React, { useEffect, useState } from "react";
import {
  View,
  Animated,
  StyleSheet,
  Easing,
  Image,
  ActivityIndicator,
} from "react-native";
import { GEAR } from "../../utils/snapShots";

export default function LoadingAnimation() {
  const [spinValue] = useState(new Animated.Value(0));
  const [fadeValue] = useState(new Animated.Value(0));

  const spinRight = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const spinLeft = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["360deg", "0deg"],
  });

  const runAnimation = () => {
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();

    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  useEffect(() => {
    runAnimation();
  });

  return (
    <Animated.View style={styles.row}>
      <Animated.View
        style={{
          transform: [{ rotate: spinRight }],
        }}>
        <View>
          <Image style={styles.largeIconRed} source={GEAR} />
        </View>
      </Animated.View>
      <View>
        <Animated.View
          style={{
            transform: [{ rotate: spinLeft }],
          }}>
          <View>
            <Image style={styles.smallIcongreen} source={GEAR} />
          </View>
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ rotate: spinLeft }],
          }}>
          <View>
            <Image style={styles.smallIconBlue} source={GEAR} />
          </View>
        </Animated.View>
      </View>
    </Animated.View>
  );
}

export function Loader({size, color}) {

  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  smallIcongreen: {
    width: 40,
    height: 40,
    tintColor: "green",
  },
  smallIconBlue: {
    width: 40,
    height: 40,
    tintColor: "#4F86EC",
  },
  largeIconRed: {
    width: 80,
    height: 80,
    tintColor: "#EA262C",
  },
  text: {
    paddingTop: 10,
    fontWeight: "bold",
    color: "#4285F4",
  },
});
