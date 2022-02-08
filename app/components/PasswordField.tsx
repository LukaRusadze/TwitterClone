import React, { useState } from "react";
import { TextInput, StyleSheet, View, Pressable } from "react-native";
import { colors } from "../config/colors";
import InputField from "./InputField";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "./CustomButton";

interface Props {
  setInputValue: Function;
  style?: any;
}

const PasswordField = ({ setInputValue, style, ...props }: Props) => {
  const [underlineColor, setUnderlineColor] = useState("#dbdbdb");
  const [underlineWidth, setUnderlineWidth] = useState(1);
  const [passwordHidden, setPasswordHidden] = useState(true);

  return (
    <View
      style={{
        ...styles.container,
        borderBottomColor: underlineColor,
        borderBottomWidth: underlineWidth,
      }}
    >
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={"Password"}
        placeholderTextColor={"#606060"}
        onChangeText={(state) => setInputValue(state)}
        selectionColor={colors.primary}
        onEndEditing={() => {
          setUnderlineColor("#dbdbdb");
          setUnderlineWidth(1);
        }}
        onFocus={() => {
          setUnderlineColor(colors.primary);
          setUnderlineWidth(2.5);
        }}
        secureTextEntry={passwordHidden}
      />

      <Pressable
        style={styles.pressable}
        onPress={() => setPasswordHidden((state) => !state)}
      >
        <Ionicons
          style={
            passwordHidden
              ? styles.passwordVisibilityOff
              : styles.passwordVisibilityOn
          }
          name="eye-outline"
        ></Ionicons>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  pressable: {},
  passwordVisibilityOff: {
    fontSize: 25,
    color: "#cccccc",
  },
  passwordVisibilityOn: {
    fontSize: 25,
    color: colors.primary,
  },
});

export default PasswordField;
