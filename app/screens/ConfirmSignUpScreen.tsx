import { StyleSheet, View, Text } from "react-native";
import React from "react";
import InputField from "../components/Atoms/InputField";
import useTwitterHeader from "../hooks/useTwitterHeader";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackGenericProp } from "../types/types";
import TermsLonger from "../components/Atoms/TermLonger";
import CustomButton from "../components/Atoms/CustomButton";
import { useAppSelector } from "../hooks/redux";
import { formatDate } from "../utils/StringFormat";
import { colors } from "../config/colors";

interface Props {}

const ConfirmSignUpScreen = ({}: Props) => {
  const navigation =
    useNavigation<NavigationStackGenericProp<"ConfirmSignUp">>();
  const accountData = useAppSelector((state) => state.account);

  useTwitterHeader(navigation);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Create your account</Text>
      <View pointerEvents="none">
        <InputField style={styles.input} value={accountData.name} />
        <InputField style={styles.input} value={accountData.email} />
        <InputField
          style={styles.input}
          value={formatDate(new Date(accountData.dateOfBirth!))}
        />
      </View>
      <View>
        <TermsLonger style={styles.terms} textStyle={styles.termsText} />
        <CustomButton style={styles.button} textStyle={styles.buttonText}>
          Sign up
        </CustomButton>
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
  headerText: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    marginTop: 12,
    marginBottom: 25,
  },
  input: {
    marginBottom: 30,
  },
  terms: {
    marginTop: 60,
  },
  termsText: {
    fontFamily: "Roboto-Regular",
    color: "#505050",
    lineHeight: 19.7,
    marginBottom: 10,
  },
  button: {
    width: "100%",
    backgroundColor: colors.primary,
    borderWidth: 0,
    height: 55,
    padding: 0,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
  },
});
