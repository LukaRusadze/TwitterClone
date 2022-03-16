import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackGenericProp } from "../types/stackNavigation";
import { colors } from "../config/colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import TermsLong from "../components/Atoms/TermsLong";
import RegisterNavigation from "../components/Organisms/RegisterNavigation";
import useTwitterHeader from "../hooks/useTwitterHeader";

type Props = {};

const CustomizeExperienceScreen = ({}: Props) => {
  const navigation =
    useNavigation<NavigationStackGenericProp<"CustomizeExperience">>();

  useTwitterHeader(navigation);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Customize your Experience</Text>
        <Text style={styles.trackText}>
          Track where you see Twitter content across the web
        </Text>
        <View style={styles.checkboxContainer}>
          <Text style={styles.soulSeller}>
            Twitter uses this data to personalize your experience. This web
            browsing history will never be stored with your name, email, or
            phone number.
          </Text>

          <BouncyCheckbox
            iconStyle={styles.checkboxIcon}
            style={styles.checkbox}
            fillColor={colors.primary}
            size={20}
            bounceEffect={1}
            bounceFriction={10}
          />
        </View>
        <TermsLong textStyle={styles.termsText} style={styles.terms} />
      </View>
      <RegisterNavigation
        isNextActive={true}
        isEmailInput={false}
        isEmailToggleVisible={false}
        onPress={() => navigation.navigate("ConfirmSignUp")}
      />
    </SafeAreaView>
  );
};

export default CustomizeExperienceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  headerText: {
    fontFamily: "TwitterChirp-Bold",
    fontSize: 30,
    marginTop: 32,
    color: "black",
  },
  content: {
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: "space-between",
  },
  trackText: {
    fontFamily: "TwitterChirp-Bold",
    fontSize: 23,
    marginTop: 42,
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
  },
  soulSeller: {
    fontFamily: "TwitterChirp",
    fontSize: 15,
    width: "85%",
    color: "#505050",
  },
  checkbox: {
    marginLeft: 17,
  },
  checkboxIcon: {
    borderRadius: 0,
    borderColor: "black",
    borderWidth: 2,
  },
  termsText: {
    lineHeight: 18,
  },
  terms: {
    marginTop: 25,
  },
});
