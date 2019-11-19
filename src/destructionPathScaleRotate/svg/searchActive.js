/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Animated, Easing, View, StyleSheet } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';

import animationExport from '../components/AnimationValue';

export default class SearchActiveIcon extends Component {
  constructor() {
    super();
    this.state = {
      fill: 'none',
      scale: 1,
      rotate: '0deg'
    };
    this.offsetValue = new Animated.Value(0);
    this.scaleValue = new Animated.Value(0);
    this.rotateValue = new Animated.Value(0);
  }
  componentDidMount() {
    // animationExport.func1();
    // console.log(AnimationValue);
  }

  render() {
    const { fill, scale, rotate } = this.state;
    const offset = this.offsetValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 150]
    });
    return (
      <Animated.View style={{ transform: [{ scale }, { rotate }] }}>
        <Svg width="29.17" height="29.09" viewBox="0 0 29.17 29.09">
          <Path
            d="M24,21.2A11.84,11.84,0,0,0,13.42,2a11.86,11.86,0,1,0,8.83,21l4.69,4.69a1.25,1.25,0,0,0,1.77,0h0a1.26,1.26,0,0,0,0-1.78Z"
            transform="translate(-1.42 -0.45)"
            fill={fill}
            stroke="#25bfa9"
            strokeDasharray="150"
            strokeDashoffset={offset}
            strokeWidth="3"
          />
        </Svg>
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  circlePositon: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
