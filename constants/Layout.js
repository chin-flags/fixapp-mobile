import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  sizes: {
    base: 16,
    font: 14,
    padding: 24,
    margin: 24,
    title: 24,
    radius: 12,
  },
};
