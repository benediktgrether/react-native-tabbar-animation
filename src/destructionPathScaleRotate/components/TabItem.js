import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

import feedActive from '../svg/feedActive';
import feedInActive from '../svg/feedInActive';
import searchActive from '../svg/searchActive';
import searchInActive from '../svg/searchInActive';
import profilActive from '../svg/profilActive';
import profilInActive from '../svg/profilInActive';

const tabBarIcons = {
  active: {
    Feed: feedActive,
    Search: searchActive,
    Camera: profilActive,
    Likes: profilActive,
    Profil: profilActive
  },
  inactive: {
    Feed: feedInActive,
    Search: searchInActive,
    Camera: profilInActive,
    Likes: profilInActive,
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
    if (label == true) {
      ShowLabel = routeName;
    }
    // const ShowLabel = routeName[label ? true : false];
    // console.log(ShowLabel);
    // console.log(ShowLabel, label);
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.hndPress} style={styles.button}>
          <View style={{ alignItems: 'center' }}>
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
