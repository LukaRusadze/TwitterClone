import React, { useLayoutEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationStackGenericProp } from "../types/types";
import { colors } from "../config/colors";
import AccountCreationButtons from "../components/Molecules/AccountCreationButtons";
import Terms from "../components/Atoms/Terms";
import { useNavigation } from "@react-navigation/native";

const StartScreen = () => {
  const navigation = useNavigation<NavigationStackGenericProp<"Start">>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
      headerTitle: () => (
        <Ionicons name="logo-twitter" size={25} color={colors.primary} />
      ),
    });
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>
            See what's happening {"\n"}in the world right now.
          </Text>
        </View>

        <View>
          <AccountCreationButtons />
          <Terms style={styles.terms} />
          <Text style={styles.logIn}>
            Have an account already?{" "}
            <Text
              style={styles.highlighted}
              onPress={() => navigation.navigate("Username")}
            >
              Log in
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    borderWidth: 1,
    width: "100%",
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight,
  },
  headerText: {
    fontFamily: "TwitterChirp-Bold",
    fontSize: 30,
    marginBottom: 30,
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    paddingLeft: 35,
    paddingRight: 35,
    backgroundColor: "white",
    height: "100%",
    justifyContent: "space-between",
  },
  highlighted: {
    color: colors.primary,
  },
  logIn: {
    marginTop: 50,
    marginBottom: 25,
    color: "#606060",
    fontFamily: "Roboto-Regular",
    fontSize: 15,
  },
  terms: {
    marginTop: 25,
  },
});

export default StartScreen;
