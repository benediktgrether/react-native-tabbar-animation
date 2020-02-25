import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#fff" }}>Search Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3c9d9b",
    alignItems: "center",
    justifyContent: "center"
  }
});
