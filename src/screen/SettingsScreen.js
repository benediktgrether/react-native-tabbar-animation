import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class SettingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#fff" }}>Setting Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#52de97",
    alignItems: "center",
    justifyContent: "center"
  }
});
