import React, { useState } from "react";
import { TextInput, StyleSheet, View, Pressable } from "react-native";
import { colors } from "../../config/colors";
import { Ionicons } from "@expo/vector-icons";

export interface PasswordFieldProps {
  setInputValue: Function;
  style?: any;
}

const PasswordField = ({ setInputValue, style }: PasswordFieldProps) => {
  const [isFocused, setIsFocusedLocal] = useState(false);
  const [passwordHidden, setPasswordHidden] = useState(true);

  return (
    <View
      style={
        isFocused
          ? [styles.container, styles.selected, style]
          : [styles.container, style]
      }
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
          setIsFocusedLocal(false);
        }}
        onFocus={() => {
          setIsFocusedLocal(true);
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
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#dbdbdb",
    borderBottomWidth: 1,
  },
  input: {
    fontSize: 18,
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 0,
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
  selected: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1.8,
  },
});

export default PasswordField;
