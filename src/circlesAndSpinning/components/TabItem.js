/* eslint-disable lines-between-class-members */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

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

class TabItem extends Component {
  hndPress = () => {
    this.props.navigation.navigate(this.props.routeName);
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
