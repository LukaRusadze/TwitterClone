import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import InputField from "../Atoms/InputField";

interface Props {
  setIsNextActive: Function;
  output: Function;
}

const LoginGetStarted = ({ setIsNextActive, output }: Props) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    output(inputValue);
  }, [inputValue]);

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
        onChangeText={setInputValue}
        placeholder="Phone, email, or username"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    marginBottom: 25,
  },
  container: {
    paddingLeft: 17,
    paddingRight: 17,
    marginTop: 20,
  },
});

export default LoginGetStarted;
