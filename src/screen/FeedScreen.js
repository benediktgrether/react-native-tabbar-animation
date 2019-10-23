import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class FeedScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#fff" }}>Feed Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#394a6d",
    alignItems: "center",
    justifyContent: "center"
  }
});
