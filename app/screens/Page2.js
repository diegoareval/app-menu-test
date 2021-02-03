import React from "react";
import { View, Text } from "react-native";
import { fields } from "../form/fields";
import Form from "../form/Form";

export default function Page2() {
  return (
    <View>
      <Text>Page 2</Text>
      <Form fields={fields} />
    </View>
  );
}
