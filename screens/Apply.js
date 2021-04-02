import React, { Component } from "react";
import { Text, View } from "react-native";

export class Apply extends Component {
  render() {
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
            fontWeight: 100,
            color: "black",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Your response has been recorded. You will be informed via mail.
          <br />
          <br />
          <Text style={{ color: "blue" }}>THANK YOU.</Text>
        </Text>
      </View>
    );
  }
}

export default Apply;
