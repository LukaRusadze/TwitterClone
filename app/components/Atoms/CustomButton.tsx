import React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  Platform,
  StyleProp,
  PressableProps,
  ViewStyle,
  PressableStateCallbackType,
  TextStyle,
} from "react-native";

export interface CustomButtonProps extends PressableProps {
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
  textStyle?: any;
  enabled?: boolean;
}

function getPressableStyle(
  state: PressableStateCallbackType,
  enabled: boolean,
  style: StyleProp<ViewStyle>,
): StyleProp<ViewStyle> {
  const outputStyle = [styles.container, style];
  if (enabled) {
    if (Platform.OS === "ios" && state.pressed) {
      outputStyle.push(styles.pressed);
    }
  } else {
    outputStyle.push(styles.disabledContainer);
  }

  return outputStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  style,
  children,
  textStyle,
  enabled = true,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        android_ripple={{ color: "default" }}
        onPress={onPress}
        disabled={!enabled}
        style={(state) => getPressableStyle(state, enabled, style)}
      >
        {typeof children === "string" ? (
          <Text
            style={[
              styles.textStyle,
              textStyle,
              !enabled && styles.disabledText,
            ]}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 30,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.5,
  },
  container: {
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
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
