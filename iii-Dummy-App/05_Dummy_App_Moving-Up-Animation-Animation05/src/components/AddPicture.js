import React, { Component } from "react";

import { View, Text, StyleSheet } from "react-native";

class AddPictures extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add Pictures</Text>
      </View>
    );
  }
}

export default AddPictures;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
