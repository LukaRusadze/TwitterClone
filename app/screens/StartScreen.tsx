import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Button,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationStackGenericProp } from "../types/stackNavigation";
import { colors } from "../config/colors";
import AccountCreationButtons from "../components/Molecules/AccountCreationButtons";
import Terms from "../components/Atoms/Terms";
import { useNavigation } from "@react-navigation/native";
import { ContextMenu } from "../NativeModules/ContextMenu";

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

  ContextMenu.addMenuOptions([
    { title: "Hello0", handler: () => console.log("1") },
    { title: "Hello1", handler: () => console.log("2") },
    { title: "Hello2", handler: () => console.log("3") },
    { title: "Hello3", handler: () => console.log("4") },
    { title: "Hello4", handler: () => console.log("5") },
    { title: "Hello5", handler: () => console.log("6") },
  ]);

  return (
    <SafeAreaView>
      <Button onPress={() => ContextMenu.show()} title="test" />
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
    fontFamily: "Chirp-Bold",
    fontSize: 30,
    marginBottom: 30,
    color: "black",
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
