/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import layout from "../../constants/Layout";

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={{
      height: 40,
      bottom: 20,
      position: "absolute",
      width: layout.window.width - layout.sizes.padding * 2,
      backgroundColor: "#E86E57",
      borderRadius: 10,
      zIndex: 2,
      left: layout.sizes.padding,
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <Text
      style={{
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "notosans-regular"
      }}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

export default CustomButton;
