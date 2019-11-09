import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated
} from "react-native";

import feedActive from "../svg/feedActive";
import feedInActive from "../svg/feedInActive";
import searchActive from "../svg/searchActive";
import searchInActive from "../svg/searchInActive";
import profilActive from "../svg/profilActive";
import profilInActive from "../svg/profilInActive";

const tabBarIcons = {
  active: {
    Feed: feedActive,
    Search: searchActive,
    Settings: profilActive
  },
  inactive: {
    Feed: feedInActive,
    Search: searchInActive,
    Settings: profilInActive
  }
};

// const { width } = Dimensions.get("window");
// console.log(width);
let widthValue = 0;

class TabItem extends Component {
  constructor() {
    super();
    this.translationXValue = new Animated.Value(0);
  }

  hndPress = () => {
    this.props.navigation.navigate(this.props.routeName);
    this.animationTranslation();
  };

  findDimensions(layout) {
    const { x, y, width, height } = layout;
    console.log("-------------");
    console.log("x: ", x, "y: ", y, "w: ", width, "h: ", height);
    widthValue = width;
  }

  componentDidMount() {
    // this.animationTranslation();
  }

  animationTranslation() {
    Animated.timing(this.translationXValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }

  render() {
    const { routeName, isActive, label } = this.props;
    const Geticons = tabBarIcons[isActive ? "active" : "inactive"][routeName];

    let ShowLabel;
    if (label == true && label == isActive) {
      ShowLabel = routeName;
    }
    // if (label == true) {
    //   ShowLabel = routeName;
    // }
    const translateX = this.translationXValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -30]
    });
    // const ShowLabel = routeName[label ? true : false];
    // console.log(ShowLabel);
    // console.log(ShowLabel, label);
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.hndPress} style={styles.button}>
          <View style={styles.items}>
            <Animated.View
              style={(styles.iconPositon, { transform: [{ translateX }] })}
            >
              <Geticons />
            </Animated.View>
            <Text
              onLayout={event => {
                this.findDimensions(event.nativeEvent.layout);
              }}
              style={styles.label}
            >
              {ShowLabel}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default TabItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  items: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  iconPositon: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  label: {
    display: "none",
    marginLeft: 10
  }
});
