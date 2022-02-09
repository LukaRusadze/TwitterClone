import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigationTypes";
import { colors } from "../config/colors";
import AccountCreationButtons from "../components/Molecules/AccountCreationButtons";
import Terms from "../components/Atoms/Terms";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const StartScreen = ({ navigation }: Props) => {
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
          <AccountCreationButtons navigation={navigation} />
          <Terms style={{ marginTop: 25 }} />
          <Text style={styles.logIn}>
            Have an account already?{" "}
            <Text
              style={styles.highlighted}
              onPress={() => navigation.navigate("Login")}
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
});

export default StartScreen;
