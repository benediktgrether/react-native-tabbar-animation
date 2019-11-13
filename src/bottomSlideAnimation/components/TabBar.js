/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import { Svg, Path, Rect } from 'react-native-svg';

import TabItem from './TabItem';

// For the Animation of the black bar
const { width } = Dimensions.get('window');
// TabWidth equals 5 => Change to tabIcons.lenght. => Import command
const tabWidth = width / 5;
// Make Animation Svg
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

class TabBar extends Component {
  value = new Animated.Value(0);
  render() {
    const { navigation } = this.props;
    const { routes, index } = navigation.state;
    const { value: translateX } = this;

    return (
      <>
        <View {...{ width }}>
          <AnimatedSvg
            width={width * 2.5}
            height="10"
            style={{ transform: [{ translateX }] }}>
            <Rect width="10" height="10" />
          </AnimatedSvg>
        </View>
        <View style={styles.container}>
          {routes.map((route, i) => (
            <TabItem
              navigation={navigation}
              key={route.routeName}
              {...route}
              isActive={index === i}
              label={false}
              // value={translateX}
            />
          ))}
          {console.log(index)}
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
  }
});
