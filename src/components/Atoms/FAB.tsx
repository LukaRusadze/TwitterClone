import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import React from "react";
import Plus from "../../assets/icons/FAB/ic_vector_plus.svg";
import { colors } from "../../config/colors";
import Animated from "react-native-reanimated";

interface Props extends PressableProps {
  rippleColor?: string;
}

const FAB = ({ onPress, rippleColor = "white" }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button]}
        android_ripple={{ color: rippleColor }}
        onPress={onPress}
      >
        <Plus fill={"white"} width={23} height={23} />
      </Pressable>
    </View>
  );
};

export default FAB;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1,
    bottom: 72,
    right: 20,
    overflow: "hidden",
    borderRadius: 100,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16.4,
  },
});
