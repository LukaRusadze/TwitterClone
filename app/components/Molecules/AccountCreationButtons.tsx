import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../../config/colors";
import CustomButton from "../Atoms/CustomButton";
import { Ionicons } from "@expo/vector-icons";

interface Props {}

const AccountCreationButtons = (props: Props) => {
  return (
    <View>
      <CustomButton style={styles.googleBtn}>
        <Ionicons name="logo-google" size={25} color="black" />
        <Text style={styles.googleBtnText}> Continue with Google</Text>
      </CustomButton>

      <View style={styles.separatorContainer}>
        <View style={styles.separator}></View>
        <Text style={styles.separatorText}>
          {"   "}Or{"   "}
        </Text>
        <View style={styles.separator}></View>
      </View>

      <CustomButton style={styles.createBtn}>
        <Text style={styles.createBtnText}>Create account</Text>
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  googleBtn: {
    width: "100%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#d1d1d1",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 6,
    paddingBottom: 6,
  },
  googleBtnText: {
    fontFamily: "Roboto-Bold",
    color: "black",
    fontSize: 16,
  },
  createBtn: {
    width: "100%",
    backgroundColor: colors.primary,
    paddingTop: 11,
    paddingBottom: 11,
  },
  createBtnText: {
    color: "white",
    fontFamily: "Roboto-Bold",
    fontSize: 16,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
    marginTop: 5,
    marginBottom: 5,
    flex: 1,
  },
  separatorText: {
    color: "#505050",
    fontFamily: "Roboto-Regular",
    fontSize: 11,
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 5,
    marginBottom: 5,
  },
});

export default AccountCreationButtons;
