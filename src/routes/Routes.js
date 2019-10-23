import * as React from "react";

import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import FeedScreen from "./../screen/FeedScreen";
import SearchScreen from "./../screen/SearchScreen";
import SettingsScreen from "./../screen/SettingsScreen";
// import TabBar from "../components/TabBarTesting";

import TabBar from "./../components/TabBar";

const bottomTabBar = createBottomTabNavigator(
  {
    Feed: {
      screen: FeedScreen
    },
    Search: {
      screen: SearchScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  },
  {
    tabBarComponent: props => <TabBar {...props} />
  }
);

export default createAppContainer(bottomTabBar);
