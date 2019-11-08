import React, { Component } from "react";
import { View } from "react-native";

import TabItem from "./TabItem";

class TabBar extends Component {
  render() {
    const { navigation } = this.props;
    const { routes, index } = navigation.state;
    return (
      <View
        style={{
          height: 80,
          //    backgroundColor: "red",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        {routes.map((route, i) => (
          <TabItem
            navigation={navigation}
            key={route.routeName}
            {...route}
            isActive={index === i}
            label={true}
          />
        ))}
      </View>
    );
  }
}

export default TabBar;
