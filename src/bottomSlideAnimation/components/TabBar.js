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
  translateXValue = new Animated.Value(tabWidth * 0 + tabWidth / 2 - 5);
  translateWidthValue = new Animated.Value(10);
  render() {
    const { navigation } = this.props;
    const { routes, index } = navigation.state;
    const { translateXValue: translateX } = this;
    const { translateWidthValue: widthValue } = this;

    return (
      <>
        <View
          {...{ width }}
          style={{ justifyContent: 'center', alignItems: 'center' }}>
          <AnimatedSvg
            width={width}
            height="10"
            style={(styles.tab, { transform: [{ translateX }] })}>
            <AnimatedRect
              width={widthValue}
              height="10"
              ry="5"
              fill="#25bfa9"
            />
          </AnimatedSvg>
        </View>
        <View style={styles.container}>
          {routes.map((route, key) => (
            <TabItem
              navigation={navigation}
              key={route.routeName}
              {...route}
              isActive={index === key}
              label={false}
              translateXValue={translateX}
              index={key}
              translateWidthValue={widthValue}

              // value={translateX}
            />
          ))}
        </View>
      </>
    );
  }
}

export default TabBar;

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#d6d6d6',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
