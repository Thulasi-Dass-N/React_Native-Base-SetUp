import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const BaseWidth = 375;
const BaseHeight = 812;

const hs = size => (width / BaseWidth) * size;
const ws = size => (height / BaseHeight) * size;
const fs = (size, factor = 0.5) =>
  size + (hs(size) - size) * factor;

export { hs , ws , fs };
