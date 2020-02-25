import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class CameraScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#fff" }}>Camera Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#52af97",
    alignItems: "center",
    justifyContent: "center"
  }
});
