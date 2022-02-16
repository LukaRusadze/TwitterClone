import React from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  GestureResponderEvent,
  View,
} from "react-native";
import CustomButton, { CustomButtonProps } from "../Atoms/CustomButton";

interface Props extends CustomButtonProps {
  isNextActive: boolean;
  isEmailInput: boolean;
  onEmailToggle?: ((event: GestureResponderEvent) => void) | undefined;
  isSeparatorVisible?: boolean;
  isEmailToggleVisible?: boolean;
}

const RegisterNavigation = ({
  isNextActive,
  onPress,
  onEmailToggle,
  isEmailToggleVisible = true,
  isEmailInput,
  isSeparatorVisible = true,
}: Props) => {
  return (
    <KeyboardAvoidingView
      style={
        isSeparatorVisible
          ? styles.container
          : [styles.container, { borderTopWidth: 0 }]
      }
    >
      {isEmailToggleVisible ? (
        <CustomButton onPress={onEmailToggle}>
          {isEmailInput ? "Use email instead" : "Use phone instead"}
        </CustomButton>
      ) : (
        <View></View>
      )}

      <CustomButton
        style={styles.nextBtn}
        textStyle={styles.nextBtnText}
        enabled={isNextActive}
        onPress={onPress}
      >
        Next
      </CustomButton>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: "#e3e3e3",
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nextBtn: {
    backgroundColor: "black",
    borderColor: "black",
    alignSelf: "flex-end",
  },
  nextBtnText: {
    color: "white",
  },
});

export default RegisterNavigation;
