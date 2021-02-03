import React, { useContext } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { MainContext } from "../context/DataContext";
import ButtonHandler from "../shared/ButtonHandler";

export default function Page3() {
  const { cleanData } = useContext(MainContext);
  const clear = () =>{
    cleanData()
    Alert.alert("Cleaned")
  }
  return (
    <View>
      <Text>Page 3</Text>
      <View style={styles.containerButton}>
        <ButtonHandler title={"Limpiar"} onPress={clear} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});
