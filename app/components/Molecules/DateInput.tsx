import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import InputField from "../Atoms/InputField";
import DatePicker from "react-native-date-picker";
import { formatDate } from "../../utils/StringFormat";
import { colors } from "../../config/colors";

interface Props {
  field: any;
  setFieldValue: Function;
}

const DateInput: React.FC<Props> = ({ field, setFieldValue, children }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <InputField
          style={styles.inputField}
          showSoftInputOnFocus={false}
          setIsFocused={setIsFocused}
          caretHidden={true}
        >
          {formatDate(field.value)}
        </InputField>
        {isFocused && (
          <Text style={styles.info}>
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else
          </Text>
        )}
      </View>

      <View>
        {children}

        {isFocused && (
          <DatePicker
            style={styles.datePicker}
            androidVariant={"nativeAndroid"}
            date={field.value}
            onDateChange={(value) => setFieldValue(field.name, value)}
            mode="date"
          />
        )}
      </View>
    </View>
  );
};

export default DateInput;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  inputField: {
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 5,
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderBottomColor: "#dbdbdb",
  },
  selected: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
  },
  datePicker: {
    marginBottom: 20,
    marginTop: 10,
    alignSelf: "center",
  },
  info: {
    marginLeft: 40,
    marginRight: 40,
    color: "#808080",
    fontSize: 14.5,
    fontFamily: "TwitterChirp",
  },
});
