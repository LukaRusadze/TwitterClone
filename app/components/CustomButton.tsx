import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  style?: any;
  children: any;
}

const CustomButton = ({ style, children }: Props) => {
  return (
    <TouchableOpacity style={{ ...styles.container, ...style }}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    backgroundColor: "grey",
    alignItems: "center",
    alignSelf: "flex-start",
    padding: 10,
  },
});

export default CustomButton;
