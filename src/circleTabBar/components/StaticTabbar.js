import React, { Component } from "react";
import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";

let Icon = {};

export default class StaticTabbar extends Component {
  render() {
    const { tabsIcon } = this.props;
    return (
      <View style={styles.container}>
        {tabsIcon.map(({ name }, key) => (
          <TouchableWithoutFeedback {...{ key }}>
            <View style={styles.tab}>
              {(Icon = name)}
              <Icon />
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },

  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
