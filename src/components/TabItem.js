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

class TabItem extends Component {
  hndPress = () => {
    this.props.navigation.navigate(this.props.routeName);
  };
  render() {
    const { routeName, isActive } = this.props;
    const Geticons = tabBarIcons[isActive ? "active" : "inactive"][routeName];
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <TouchableWithoutFeedback onPress={this.hndPress} style={styles.button}>
          <View>
            <Geticons />
            <Text>{routeName}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default TabItem;

const styles = StyleSheet.create({
  rundObject: {
    height: 75,
    width: 75,
    borderRadius: 50,
    backgroundColor: "blue"
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
