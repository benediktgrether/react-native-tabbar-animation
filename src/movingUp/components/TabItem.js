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
  translateYTabBarValue = new Animated.Value(0);
  translateYIconValue = new Animated.Value(0);
  translateYInActiveIconValue = new Animated.Value(0);
  opacityValue = new Animated.Value(0);

  hndPress = () => {
    this.props.navigation.navigate(this.props.routeName);
    this.tabBarAnimation();
  };

  tabBarAnimation = () => {
    Animated.parallel([
      Animated.spring(this.translateYIconValue, {
        toValue: 1,
        useNativeDriver: true
      }),
      Animated.timing(this.opacityValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true
      }),
      Animated.timing(this.translateYTabBarValue, {
        toValue: 1,
        delay: 100,
        duration: 300,
        useNativeDriver: true
      }),
      Animated.spring(this.translateYInActiveIconValue, {
        toValue: 1,
        useNativeDriver: true
      })
    ]).start();
  };

  // tabBarAnimation() {
  //   Animated.timing(translateYTabBarValue, {
  //     toValue: 1,
  //     useNativeDriver: true
  //   }).start();
  // }

  render() {
    const { routeName, isActive, label } = this.props;
    const Geticons = tabBarIcons[isActive ? 'active' : 'inactive'][routeName];
    let ShowLabel;
    if (label === true) {
      ShowLabel = routeName;
    }

    // Animation Value Interpolate
    // Value for the Tab Bar
    const translateYTabBar = this.translateYTabBarValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -10]
    });
    // Value for the Tab Icon
    const translateYIcon = this.translateYIconValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-12, -40]
    });

    // Value Opacity for the Gray Box
    // const opacity = this.opacityValue.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ['rgba(178, 189, 194, 0)', 'rgba(178, 189, 194, 1)']
    // });

    // const translateYInActiveIcon = this.translateYInActiveIconValue.interpolate(
    //   {
    //     inputRange: [0, 1],
    //     outputRange: [-40, 0]
    //   }
    // );
    // const ShowLabel = routeName[label ? true : false];
    // console.log(ShowLabel);
    // console.log(ShowLabel, label);

    return (
      <Animated.View
        style={
          isActive === true
            ? {
                flex: 1,
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: '#b2bdc2',
                height: 100,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                transform: [{ translateY: translateYTabBar }]
              }
            : styles.container
        }>
        <TouchableWithoutFeedback onPress={this.hndPress} style={styles.button}>
          <Animated.View
            style={
              isActive === true
                ? { transform: [{ translateY: translateYIcon }] }
                : { paddingTop: 12 }
            }>
            <Geticons />
            <Text>{ShowLabel}</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </Animated.View>
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
  btnActiveColor: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#b2bdc2',
    // top: -10,
    // transform: [{ translateY: translateYTabBar }],
    height: 100,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  btnActive: {
    // position: 'absolute',
    // top: -10
    transform: [{ translateY: -40 }]
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  test: {
    backgroundColor: 'green',
    position: 'absolute',
    top: -20,
    left: 20
  }
});
