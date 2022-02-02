import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

interface CustomButtonProps extends TouchableOpacityProps {
  style?: any;
  children: any;
  textStyle?: any;
  enabled?: boolean;
}

const CustomButton = ({
  onPress,
  style,
  children,
  textStyle,
  enabled = true,
}: CustomButtonProps) => {
  const [activeOpacity, setActiveOpacity] = useState(0.2);

  useEffect(() => {
    if (enabled) {
      setActiveOpacity(0.2);
    } else {
      setActiveOpacity(1);
    }
  }, [enabled]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
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
