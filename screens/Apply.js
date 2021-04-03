import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Apply = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Text
        style={{
          fontSize: 35,
          color: "black",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        Your response has been recorded. You will be informed via mail soon.
        <Text style={{ color: "blue" }}>{"\n"}THANK YOU.</Text>
      </Text>
    </View>
  );
};

export default Apply;

const styles = StyleSheet.create({});
