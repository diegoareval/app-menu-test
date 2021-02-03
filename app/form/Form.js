import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { getInitialState, getValues } from "../helpers/getData";

const Form = ({ fields }) => {
  const fieldKeys = Object.keys(fields);
  const [values, setValues] = useState(getInitialState(fieldKeys));

  // handle change
  const onChangeValue = (key, value) => {
      // updating state according input onChange
    const newState = { ...values, [key]: value };
    setValues(newState);
  };

  // submit
  const submit = async () => {
    const values = getValues(fieldKeys);
    console.log(values);
  };

  return fieldKeys.map((key) => {
    const field = fields[key];
    return (
      <View key={key} styles={styles.container}>
        <View style={styles.inputContainer}>
          <Text>{field.label}</Text>
          <TextInput
            style={styles.input}
            {...field.inputProps}
            value={values[key]}
            onChangeText={(text) => onChangeValue(key, text)}
          />
        </View>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    paddingHorizontal: 5,
    backgroundColor: "white",
    marginBottom: 5,
  },
  inputContainer: {
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
});

export default Form;
