import React, { useState, useCallback, useEffect } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { colors } from "../config/colors";
import InputField from "./InputField";

interface Props {
  setIsNextActive: Function;
}

const LoginPrompt = ({ setIsNextActive }: Props) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue.length > 0) {
      setIsNextActive(true);
    } else {
      setIsNextActive(false);
    }
  }, [inputValue]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        To get started, first enter your phone, email, or @username
      </Text>

      <InputField
        setInputValue={setInputValue}
        placeholder="Phone, email, or username"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "TwitterChirp-Bold",
    fontSize: 30,
    marginBottom: 25,
  },
  container: {
    paddingLeft: 17,
    paddingRight: 17,
    marginTop: 20,
  },
});

export default LoginPrompt;
