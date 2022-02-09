import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

interface CustomButtonProps extends TouchableOpacityProps {
  style?: any;
  textStyle?: any;
  enabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  style,
  children,
  textStyle,
  enabled = true,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!enabled}
      style={
        enabled
          ? { ...styles.container, ...style }
          : { ...styles.container, ...style, ...styles.disabledContainer }
      }
    >
      {typeof children === "string" ? (
        <Text
          style={
            enabled
              ? { ...styles.textStyle, ...textStyle }
              : { ...styles.textStyle, ...textStyle, ...styles.disabledText }
          }
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: "flex-start",
    borderColor: "#bababa",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 7,
    paddingBottom: 7,
  },
  disabledContainer: {
    backgroundColor: "#606060",
    borderColor: "#606060",
  },
  disabledText: {
    color: "#bfbfbf",
  },
  textStyle: {
    fontFamily: "Roboto-Bold",
    fontSize: 14.5,
    color: "black",
  },
});

export default CustomButton;
