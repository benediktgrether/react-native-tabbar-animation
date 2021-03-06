/* eslint-disable lines-between-class-members */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  Animated
} from 'react-native';

import feedActive from '../svg/feedActive';
import feedInActive from '../svg/feedInActive';
import searchActive from '../svg/searchActive';
import searchInActive from '../svg/searchInActive';
import profilActive from '../svg/profilActive';
import profilInActive from '../svg/profilInActive';
import cameraActive from '../svg/cameraActive';
import cameraInActive from '../svg/cameraInActive';
import likesActive from '../svg/likesActive';
import likesInActive from '../svg/likesInActive';

const tabBarIcons = {
  active: {
    Feed: feedActive,
    Search: searchActive,
    Camera: cameraActive,
    Likes: likesActive,
    Profil: profilActive
  },
  inactive: {
    Feed: feedInActive,
    Search: searchInActive,
    Camera: cameraInActive,
    Likes: likesInActive,
    Profil: profilInActive
  }
};
const getTabWidth = Object.keys(tabBarIcons.inactive).length;
const { width } = Dimensions.get('window');
const tabWidth = width / getTabWidth;
// console.log(tabWidth);

class TabItem extends Component {
  hndPress = () => {
    this.props.navigation.navigate(this.props.routeName);
    const { translateXValue, index, translateWidthValue } = this.props;

    if (index !== this.index)
      Animated.parallel([
        Animated.spring(translateXValue, {
          toValue: tabWidth * index + tabWidth / 2 - 5,
          useNativeDriver: true
        }),
        Animated.sequence([
          Animated.timing(translateWidthValue, {
            toValue: 40,
            duration: 100,
            useNativeDriver: true
          }),
          Animated.timing(translateWidthValue, {
            toValue: 10,
            duration: 100,
            useNativeDriver: true
          })
        ])
      ]).start();
  };

  render() {
    const { routeName, isActive, label } = this.props;
    const Geticons = tabBarIcons[isActive ? 'active' : 'inactive'][routeName];
    let ShowLabel;
    if (label === true) {
      ShowLabel = routeName;
    }
    // const ShowLabel = routeName[label ? true : false];
    // console.log(ShowLabel);
    // console.log(ShowLabel, label);

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.hndPress} style={styles.button}>
          <View style={{ alignItems: 'center', paddingTop: 12 }}>
            <Geticons />
            <Text>{ShowLabel}</Text>
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
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
