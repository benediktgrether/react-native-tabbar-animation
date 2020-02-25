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
  values = [];
  constructor(props) {
    super(props);
    const { tabsIcon } = this.props;
    this.values = tabsIcon.map(
      (name, index) => new Animated.Value(index === 0 ? 1 : 0)
    );
  }

  onPress = index => {
    const { value, tabsIcon } = this.props;
    const tabsWidth = width / tabsIcon.length;
    Animated.sequence([
      ...this.values.map(value =>
        Animated.timing(value, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true
        })
      ),
      Animated.parallel([
        Animated.spring(this.values[index], {
          toValue: 1,
          useNativeDriver: true
        }),
        Animated.spring(value, {
          toValue: -width + tabsWidth * index,
          useNativeDriver: true
        })
      ])
    ]).start();
  };

  render() {
    const { tabsIcon, value } = this.props;
    const tabWidth = width / tabsIcon.length;

    return (
      <View style={styles.container}>
        {tabsIcon.map(({ name }, key) => {
          // Hello
          const activeValue = this.values[key];
          const opacity = value.interpolate({
            inputRange: [
              -width + tabWidth * (key - 1),
              -width + tabWidth * key,
              -width + tabWidth * (key + 1)
            ],
            outputRange: [1, 0, 1],
            extrapolate: "clamp"
          });

          const translateY = activeValue.interpolate({
            inputRange: [0, 1],
            outputRange: [64, 0]
          });

          return (
            <React.Fragment {...{ key }}>
              <TouchableWithoutFeedback onPress={() => this.onPress(key)}>
                <Animated.View style={[styles.tab, { opacity }]}>
                  {name}
                  {/* <Icon name={name} color="black" size={25} /> */}
                </Animated.View>
              </TouchableWithoutFeedback>
              <Animated.View
                style={{
                  position: "absolute",
                  left: tabWidth * key,
                  width: tabWidth,
                  height: 64,
                  justifyContent: "center",
                  alignItems: "center",
                  transform: [{ translateY }]
                }}
              >
                <View style={styles.circle}>{name}</View>
              </Animated.View>
            </React.Fragment>
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
  },
  circle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.75,
    shadowRadius: 1,
    shadowColor: "black",
    shadowOffset: { height: 1, width: 0 }
  }
});
