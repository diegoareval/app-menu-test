import React from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";

const ButtonHandler = ({ title = "", onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    backgroundColor: "skyblue",
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    width: 250,
    elevation: 4,
    borderRadius: 17,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 80,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ButtonHandler;
