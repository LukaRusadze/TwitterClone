import { KeyboardAvoidingView, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackGenericProp } from "../../types/stackNavigation";
import CustomButton from "../Atoms/CustomButton";

interface Props {
  isNextActive: boolean;
}

const ProfilePictureNavigation = ({ isNextActive }: Props) => {
  const navigation =
    useNavigation<NavigationStackGenericProp<"ProfilePicture">>();

  function handleNextScreen() {
    navigation.navigate("MainTab");
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <CustomButton onPress={handleNextScreen}>Skip</CustomButton>
      <CustomButton
        style={styles.nextBtn}
        textStyle={styles.nextBtnText}
        enabled={isNextActive}
        onPress={handleNextScreen}
      >
        Next
      </CustomButton>
    </KeyboardAvoidingView>
  );
};

export default ProfilePictureNavigation;

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
