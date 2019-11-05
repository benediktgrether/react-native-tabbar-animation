import React, { Component } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  Dimensions
} from "react-native";

import { Feather as Icon } from "@expo/vector-icons";

// let Icon = {};

const { width } = Dimensions.get("window");

export default class StaticTabbar extends Component {
  onPress = index => {
    const { value, tabsIcon } = this.props;
    const tabsWidth = width / tabsIcon.length;
    Animated.spring(value, {
      toValue: -width + tabsWidth * index,
      useNativeDriver: true
    }).start();
  };

  render() {
    const { tabsIcon, value } = this.props;
    const tabWidth = width / tabsIcon.length;
    return (
      <View style={styles.container}>
        {tabsIcon.map(({ name }, key) => {
          // Hello

          const opacity = value.interpolate({
            inputRange: [
              -width + tabWidth * (key - 1),
              -width + tabWidth * key,
              -width + tabWidth * (key + 1)
            ],
            outputRange: [1, 0, 1],
            extrapolate: "clamp"
          });

          console.log(this.animationValue);
          return (
            <TouchableWithoutFeedback
              onPress={() => this.onPress(key)}
              {...{ key }}
            >
              <Animated.View style={[styles.tab, { opacity }]}>
                {name}
                {/* <Icon name={name} color="black" size={25} /> */}
              </Animated.View>
            </TouchableWithoutFeedback>
          );
        })}
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
    height: 64,
    justifyContent: "center",
    alignItems: "center"
  }
});
