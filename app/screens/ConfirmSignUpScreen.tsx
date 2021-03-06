import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import React, { useCallback } from "react";
import InputField from "../components/Atoms/InputField";
import useTwitterHeader from "../hooks/useTwitterHeader";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackGenericProp } from "../types/stackNavigation";
import TermsLonger from "../components/Atoms/TermsLonger";
import CustomButton from "../components/Atoms/CustomButton";
import { useAppSelector } from "../types/redux";
import { formatDate } from "../utils/StringFormat";
import { colors } from "../config/colors";

interface Props {}

const ConfirmSignUpScreen = ({}: Props) => {
  const navigation =
    useNavigation<NavigationStackGenericProp<"ConfirmSignUp">>();
  const accountData = useAppSelector((state) => state.account);

  const handleSignUp = useCallback(() => {
    navigation.navigate("EmailVerification");
  }, [navigation]);

  useTwitterHeader(navigation);

  return (
    <SafeAreaView>
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
          <CustomButton
            style={styles.button}
            textStyle={styles.buttonText}
            onPress={handleSignUp}
          >
            Sign up
          </CustomButton>
        </View>
      </View>
    </SafeAreaView>
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
    color: "black",
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
