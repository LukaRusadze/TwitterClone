import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigationTypes";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/colors";
import RegisterNavigation from "../components/Organisms/RegisterNavigation";
import InputField from "../components/Atoms/InputField";
import RegisterNameField from "../components/Molecules/RegisterNameField";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const UserCreation = ({ navigation }: Props) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
      headerShadowVisible: false,
      headerLeft: () => (
        <Ionicons
          name="md-arrow-back"
          size={25}
          color={colors.primary}
          onPress={navigation.goBack}
        />
      ),
      headerTitle: () => (
        <Ionicons name="logo-twitter" size={24} color={colors.primary} />
      ),
    });
  });

  const [isNextActive, setIsNextActive] = useState(false);
  const [name, setName] = useState("");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Create your account</Text>

        <View style={styles.formContainer}>
          <RegisterNameField wrongColor="#ff1100" />

          <InputField
            style={styles.inputField}
            setInputValue={setPhoneOrEmail}
            keyboardType="number-pad"
            placeholder="Phone number or email address"
          />
          <InputField
            style={styles.inputField}
            setInputValue={setDateOfBirth}
            placeholder="Date of birth"
          />
        </View>
      </View>
      <RegisterNavigation isNextActive={isNextActive} navigation={navigation} />
    </View>
  );
};

export default UserCreation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    paddingTop: 13,
    paddingLeft: 40,
    paddingRight: 40,
    flex: 1,
  },
  headerText: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    marginBottom: 25,
  },
  formContainer: {
    marginTop: 14,
  },
  inputField: {
    marginTop: 26,
  },
});
