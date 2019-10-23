import * as React from "react";
import { View, StyleSheet } from "react-native";
import Tab from "../tab/TabTesting";

const TabBar = props => {
  const { navigationState, navigation, position } = this.props;
  return (
    <View style={styles.container}>
      {navigationState.routes.map((route, index) => {
        const focusAnim = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0, 1, 0]
        });
        return (
          <Tab
            focusAnim={focusAnim}
            title={route.routeName}
            onPress={() => navigation.navigate(route.routeName)}
          />
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "seashell",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
