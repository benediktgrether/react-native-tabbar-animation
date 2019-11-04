import React, { Component } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  Dimensions
} from "react-native";

let Icon = {};

const { width } = Dimensions.get("window");

// onPress = index => {
//   // const { value, tabsIcon } = this.props;
//   const tabsWidth = width / tabsIcon.length;
//   Animated.spring(value, {
//     toValue: -width + tabsWidth * index,
//     useNativeDriver: true
//   }).start();
// };

export default class StaticTabbar extends Component {
  // values = [];

  // constructor(props) {
  //   super(props);
  //   const { tabsIcon } = this.props;
  //   this.values = tabsIcon.map(
  //     (name, index) => new Animated.Value(index === 0 ? 1 : 0)
  //   );
  // }

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
    console.log(tabsIcon.length);
    return (
      <View style={styles.container}>
        {tabsIcon.map(({ name }, key) => {
          const tabsWidth = width / tabsIcon.length;
          const cursor = tabsWidth * key;
          const opacity = value.interpolate({
            inputRange: [cursor - tabsWidth, cursor, cursor + tabsWidth],
            outputRange: [1, 0, 1],
            extrapolate: "clamp"
          });

          console.log(opacity);
          return (
            <TouchableWithoutFeedback
              onPress={() => this.onPress(key)}
              {...{ key }}
            >
              <Animated.View style={[styles.tab, { opacity }]}>
                {/* {(Icon = name)} */}
                {/* <Icon /> */}
                {name}
                {/* <Text>{key}</Text> */}
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
