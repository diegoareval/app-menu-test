import React, { useContext } from "react";
import { View, Text } from "react-native";
import Card from "../components/Card";
import { MainContext } from "../context/DataContext";

export default function Page2() {
  const { data } = useContext(MainContext);
  return (
    <View>
      <Text>Page 2</Text>
      <Card data={data} />
    </View>
  );
}
