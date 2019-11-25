/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';
import { Svg, Path, Rect } from 'react-native-svg';

import TabItem from './TabItem';

// For the Animation of the black bar
const { width } = Dimensions.get('window');
// TabWidth equals 5 => Change to tabIcons.lenght. => Import command
const tabWidth = width / 5;
// Make Animation Svg
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedRect = Animated.createAnimatedComponent(Rect);

class TabBar extends Component {
  render() {
    const { navigation } = this.props;
    const { routes, index } = navigation.state;

    return (
      <View style={styles.container}>
        {routes.map((route, key) => (
          <TabItem
            navigation={navigation}
            key={route.routeName}
            {...route}
            isActive={index === key}
            label={false}
            index={key}
          />
        ))}
      </View>
    );
  }
}

export default TabBar;

const styles = StyleSheet.create({
  container: {
    height: 46,
    // backgroundColor: '#d6d6d6',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: StyleSheet.hairlineWidth
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
