import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fields } from "../form/fields";
import Form from "../form/Form";

export default function Page1() {
  return (
    <View>
      <Text>Page 1</Text>
      <View style={styles.container}>
        <Form fields={fields} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});
