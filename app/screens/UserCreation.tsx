import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationStackGenericProp, RootStackParamList } from "../types/types";
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
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import ValidatedInput from "../components/Atoms/ValidatedInput";

const UserCreation = () => {
  const navigation = useNavigation<NavigationStackGenericProp<"Register">>();

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

  const phoneNumberRegex = /^[+]?([0-9]*[\.\s\-\(\)]|[0-9]+){3,24}$/;
  const maxNameLength = 50;

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .max(maxNameLength, "Must be 50 characters or fewer")
      .required(" "),
    phoneNumber: Yup.string().matches(
      phoneNumberRegex,
      "Please enter a valid phone number."
    ),
    email: Yup.string().email(),
    dateOfBirth: Yup.date(),
  });

  return (
    <View style={styles.content}>
      <Text style={styles.headerText}>Create your account</Text>
      <Formik
        initialValues={{
          name: "",
          phoneNumber: "",
          email: "",
          dateOfBirth: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={SignupSchema}
      >
        {({ handleChange, handleSubmit, values, errors }) => {
          return (
            <View style={{}}>
              <FastField name="name">
                {({ field, form, meta }: FieldProps) => {
                  return (
                    <ValidatedInput
                      placeholder="Name"
                      wrongColor={"red"}
                      onChangeText={handleChange(field.name)}
                      value={field.value}
                      errors={errors.name}
                      required={true}
                    />
                  );
                }}
              </FastField>
              <FastField name="phoneNumber">
                {({ field, form, meta }: FieldProps) => {
                  return (
                    <ValidatedInput
                      style={styles.inputField}
                      onChangeText={handleChange(field.name)}
                      value={field.value}
                      keyboardType="number-pad"
                      placeholder="Phone number or email address"
                      errors={errors.phoneNumber}
                    />
                  );
                }}
              </FastField>
              <FastField name="dateOfBirth">
                {({ field, form, meta }: FieldProps) => {
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
            </View>
          );
        }}
      </Formik>
      <RegisterNavigation isNextActive={isNextActive} />
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
    fontFamily: "TwitterChirp-Bold",
    fontSize: 30,
    marginBottom: 39,
  },
  formContainer: {},
  inputField: {
    marginTop: 26,
  },
});
