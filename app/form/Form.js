import React, { useContext } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { MainContext } from "../context/DataContext";

const Form = ({ fields }) => {
  const fieldKeys = Object.keys(fields);
  const { data, setData } = useContext(MainContext);

  // handle change
  const onChangeValue = (key, value) => {
    // updating state according input onChange
    const newState = { ...data, [key]: value };
    setData(newState);
  };

  // console.warn(data);

  return fieldKeys.map((key) => {
    const field = fields[key];
    return (
      <View key={key} styles={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{field.label}</Text>
          <TextInput
            style={styles.input}
            {...field.inputProps}
            value={data[key]}
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
    borderRadius: 20
  },
  inputContainer: {
    marginBottom: 20,
    shadowColor: "gray",
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
  label: {
    color: "blue",
    textAlign: "center"
  }
});

export default Form;
