import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ProfilScreen extends Component {
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
    backgroundColor: "#52debe",
    alignItems: "center",
    justifyContent: "center"
  }
});
