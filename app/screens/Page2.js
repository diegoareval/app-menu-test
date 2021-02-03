import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MainContext } from "../context/DataContext";

export default function Page2() {
  const { data } = useContext(MainContext);
  return (
    <View>
      <Text>Page 2</Text>
      <View style={styles.container}>
        <View style={styles.fields}>
          <Text style={styles.label}>Name: {data.name}</Text>
        </View>
        <View style={styles.fields}>
          <Text style={styles.label}>Lastname: {data.lastname}</Text>
        </View>
        <View style={styles.fields}>
          <Text style={styles.label}>Address: {data.address}</Text>
        </View>
        <View style={styles.fields}>
          <Text style={styles.label}>Phone Number: {data.phone}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    width: 400,
    backgroundColor: "gray",
    margin: 10
  },
  label: {
    color: "blue",
    textAlign: "center"
  }, fields:{
    marginTop: 10
  }
});
