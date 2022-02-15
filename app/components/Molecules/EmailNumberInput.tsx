import { StyleSheet } from "react-native";
import React from "react";
import ValidatedInput, { ValidatedInputProps } from "../Atoms/ValidatedInput";

interface Props extends ValidatedInputProps {
  isEmailInput: boolean;
}

const EmailNumberInput = ({
  onChangeText,
  value,
  errors,
  style,
  isEmailInput,
}: Props) => {
  return (
    <>
      {isEmailInput ? (
        <ValidatedInput
          style={style}
          onChangeText={onChangeText}
          value={value}
          keyboardType="number-pad"
          placeholder="Phone"
          errors={errors}
        />
      ) : (
        <ValidatedInput
          style={style}
          onChangeText={onChangeText}
          value={value}
          keyboardType="email-address"
          placeholder="Email"
          errors={errors}
        />
      )}
    </>
  );
};

export default EmailNumberInput;

const styles = StyleSheet.create({});
