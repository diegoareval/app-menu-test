import React from "react";
import { View, Text } from "react-native";
import { fields } from "../form/fields";
import Form from "../form/Form";

export default function Page1() {
  return (
    <View>
      <Text>Page 1</Text>
      <Form
        fields={fields}
      />
    </View>
  );
}
