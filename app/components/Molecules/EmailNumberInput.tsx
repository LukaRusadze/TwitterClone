import { StyleSheet } from "react-native";
import React from "react";
import ValidatedInput, { ValidatedInputProps } from "../Atoms/ValidatedInput";

interface Props extends ValidatedInputProps {
  isEmailInput: boolean;
  setIsEmailToggleVisible?: (visibile: boolean) => void;
}

const EmailNumberInput = ({
  onChangeText,
  value,
  errors,
  style,
  isEmailInput,
  setIsEmailToggleVisible,
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
          onFocus={() => {
            if (setIsEmailToggleVisible) {
              setIsEmailToggleVisible(true);
            }
          }}
          onEndEditing={() => {
            if (setIsEmailToggleVisible) {
              setIsEmailToggleVisible(false);
            }
          }}
        />
      ) : (
        <ValidatedInput
          style={style}
          onChangeText={onChangeText}
          value={value}
          keyboardType="email-address"
          placeholder="Email"
          errors={errors}
          onFocus={() => {
            if (setIsEmailToggleVisible) {
              setIsEmailToggleVisible(true);
            }
          }}
          onEndEditing={() => {
            if (setIsEmailToggleVisible) {
              setIsEmailToggleVisible(false);
            }
          }}
        />
      )}
    </>
  );
};

export default EmailNumberInput;

const styles = StyleSheet.create({});
