import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import InputField from "../components/Atoms/InputField";
import useTwitterHeader from "../hooks/useTwitterHeader";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackGenericProp } from "../types/types";
import TermsLonger from "../components/Atoms/TermLonger";
import CustomButton from "../components/Atoms/CustomButton";
import { useAppSelector } from "../hooks/redux";

interface Props {}

const ConfirmSignUpScreen = ({}: Props) => {
  const navigation =
    useNavigation<NavigationStackGenericProp<"ConfirmSignUp">>();
  const accountData = useAppSelector((state) => state.account);

  useEffect(() => {
    console.log(accountData);
  }, [accountData]);

  useTwitterHeader(navigation);

  return (
    <View style={styles.container}>
      <View>
        <InputField />
        <InputField />
        <InputField />
      </View>
      <View>
        <TermsLonger />
        <CustomButton>Sign up</CustomButton>
      </View>
    </View>
  );
};

export default ConfirmSignUpScreen;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 40,
    paddingRight: 40,
  },
});
