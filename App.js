import React from "react";
import { StyleSheet, Text, View } from "react-native";
console.disableYellowBox = true;

import Routes from "./src/routes/Routes";

import CircleTabBar from "./src/circleTabBar/components/CircleTabBar";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
    // <Routes />
    <View style={styles.container}>
      <CircleTabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ea3345",
    justifyContent: "flex-end"
  }
});
