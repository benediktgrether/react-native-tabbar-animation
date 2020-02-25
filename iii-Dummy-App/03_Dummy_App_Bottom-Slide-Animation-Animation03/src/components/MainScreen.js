import React, { Component } from "react";

import { View, Text, StyleSheet, Image } from "react-native";

// import Navigation from "../routes/Routes";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "./Home";
import Search from "./Search";
import AddPicture from "./AddPicture";
import Notification from "./Notifications";
import Profil from "./Profil";

const searchOutline = require("./../../assets/icons/png/search-outline.png");
const searchFill = require("./../../assets/icons/png/search-fill.png");
const homeOutline = require("./../../assets/icons/png/home-outline.png");
const homeFill = require("./../../assets/icons/png/home-fill.png");
const addOutline = require("./../../assets/icons/png/add-outline.png");
const addFill = require("./../../assets/icons/png/add-fill.png");
const heartOutline = require("./../../assets/icons/png/heart-outline.png");
const heartFill = require("./../../assets/icons/png/heart-fill.png");
const profilOutline = require("./../../assets/icons/png/profil-outline.png");
const profilFill = require("./../../assets/icons/png/profil-fill.png");

class Feed extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return <TabNavigatorContainer />;
  }
}

export default Feed;

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Home",
        tabBarIcon: ({ tintColor }) =>
          tintColor == "#4d606e" ? (
            <Image style={styles.tabIcons} source={homeFill} />
          ) : (
            <Image style={styles.tabIcons} source={homeOutline} />
          )
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        title: "Search",
        tabBarIcon: ({ tintColor }) =>
          tintColor == "#4d606e" ? (
            <Image style={styles.tabIcons} source={searchFill} />
          ) : (
            <Image style={styles.tabIcons} source={searchOutline} />
          )
      }
    },
    AddPicture: {
      screen: AddPicture,
      navigationOptions: {
        title: "Add Pictures",
        tabBarIcon: ({ tintColor }) =>
          tintColor == "#4d606e" ? (
            <Image style={styles.tabIcons} source={addFill} />
          ) : (
            <Image style={styles.tabIcons} source={addOutline} />
          )
      }
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        title: "Notification",
        tabBarIcon: ({ tintColor }) =>
          tintColor == "#4d606e" ? (
            <Image style={styles.tabIcons} source={heartFill} />
          ) : (
            <Image style={styles.tabIcons} source={heartOutline} />
          )
      }
    },
    Profil: {
      screen: Profil,
      navigationOptions: {
        title: "Profil",
        tabBarIcon: ({ tintColor }) =>
          tintColor == "#4d606e" ? (
            <Image style={styles.tabIcons} source={profilFill} />
          ) : (
            <Image style={styles.tabIcons} source={profilOutline} />
          )
      }
    }
  },
  {
    tabBarOptions: {
      // Color for the Icons and tintColor Meaning
      activeTintColor: "#4d606e",
      inactiveTintColor: "#d3d4d8",
      showLabel: false
      // inactiveBackgroundColor: "#fff",
      // Color for the TabBar
      // style: {
      //   backgroundColor: "#gray"
      // }
    }
  }
);

const styles = StyleSheet.create({
  tabIcons: {
    width: 20,
    height: 20,
    resizeMode: "center"
  }
});

const TabNavigatorContainer = createAppContainer(TabNavigator);
