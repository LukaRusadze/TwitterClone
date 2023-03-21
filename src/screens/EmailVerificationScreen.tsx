import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackGenericProp } from "../types/stackNavigation";
import useTwitterHeader from "../hooks/useTwitterHeader";
import { useAppSelector } from "../types/redux";
import InputField from "../components/Atoms/InputField";
import RegisterNavigation from "../components/Organisms/RegisterNavigation";
import { colors } from "../config/colors";
import { verifyEmail } from "../utils/EmailVerification/emailVerification";

interface Props {}

const EmailVerificationScreen = ({}: Props) => {
  const [isNextActive, setIsNextActive] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [emailCode, setEmailCode] = useState(0);
  const accountData = useAppSelector((state) => state.account);

  const navigation =
    useNavigation<NavigationStackGenericProp<"EmailVerification">>();
  useTwitterHeader(navigation);

  useEffect(() => {
    if (verificationCode) {
      setIsNextActive(true);
    } else {
      setIsNextActive(false);
    }
  }, [verificationCode]);

  useEffect(() => {
    verifyEmail(setEmailCode);
  }, []);

  function handleSubmit() {
    if (emailCode === parseInt(verificationCode, 10)) {
      navigation.navigate("RegistrationPassword");
    } else {
      Platform.OS === "android"
        ? ToastAndroid.show("Wrong Code", ToastAndroid.LONG)
        : Alert.alert("Wrong Code");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>We sent you a code</Text>
        <Text style={styles.enterPrompt}>
          Enter it below to verify {accountData.email}.
        </Text>
        <InputField
          style={styles.input}
          onChangeText={setVerificationCode}
          value={verificationCode}
          keyboardType="numeric"
          placeholder="Verification Code"
        />
        <Text style={styles.resend} onPress={() => verifyEmail}>
          Didn't receive email?
        </Text>
      </View>
      <KeyboardAvoidingView>
        <RegisterNavigation
          onPress={() => handleSubmit()}
          isNextActive={isNextActive}
          isEmailInput={false}
          isEmailToggleVisible={false}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EmailVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  headerText: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    marginTop: 15,
    color: "black",
  },
  resend: {
    color: colors.primary,
    marginTop: 8.5,
    fontSize: 15,
  },
  enterPrompt: {
    marginTop: 13.5,
    color: "#606060",
  },
  input: {
    marginTop: 22,
  },
  content: {
    paddingLeft: 17,
    paddingRight: 17,
  },
});
