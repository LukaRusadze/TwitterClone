import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigationTypes";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/colors";
import RegisterNavigation from "../components/Organisms/RegisterNavigation";
import InputField from "../components/Atoms/InputField";
import RegisterNameField from "../components/Molecules/RegisterNameField";
import {
  FastField,
  Field,
  FieldProps,
  Formik,
  FormikFormProps,
  FormikProps,
} from "formik";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const UserCreation: React.FC<Props> = ({ navigation }) => {
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
  // const [name, setName] = useState("");
  // const [phoneOrEmail, setPhoneOrEmail] = useState("");
  // const [dateOfBirth, setDateOfBirth] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Create your account</Text>
      <Formik
        initialValues={{
          name: "",
          phoneNumber: "",
          email: "",
          dateOfBirth: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            {console.log("RENDER")}
            <FastField name="name">
              {({ field, form, meta }: FieldProps) => {
                console.log(values.name);
                return (
                  <RegisterNameField
                    wrongColor={"red"}
                    onChangeText={handleChange(field.name)}
                    value={field.value}
                  />
                );
              }}
            </FastField>
            <FastField name="phoneNumber">
              {({ field, form, meta }: FieldProps) => {
                console.log(values.phoneNumber);
                return (
                  <InputField
                    style={styles.inputField}
                    onChangeText={handleChange(field.name)}
                    value={field.value}
                    keyboardType="number-pad"
                    placeholder="Phone number or email address"
                  />
                );
              }}
            </FastField>
            <FastField name="dateOfBirth">
              {({ field, form, meta }: FieldProps) => {
                console.log(field.value);
                return (
                  <InputField
                    style={styles.inputField}
                    onChangeText={handleChange(field.name)}
                    value={field.value}
                    placeholder="Date of birth"
                  />
                );
              }}
            </FastField>
          </>
        )}
      </Formik>
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
