/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Animated, Easing, View, StyleSheet, Alert } from 'react-native';
import { Svg, Path, Rect } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class FeedActiveIcon extends Component {
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
    this.animationOutline();
  }

  animationOutline() {
    Animated.timing(this.offsetValue, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true
    }).start(() => {
      this.animationActive();
    });
  }
  animationActive() {
    this.setState({
      // fill: '#f35463',
      fill: '#313131',
      scale: this.scaleValue.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, 1.25, 1]
      }),
      rotate: this.rotateValue.interpolate({
        inputRange: [0, 1, 2, 3],
        outputRange: ['0deg', '-45deg', '45deg', '0deg']
      })
    });
    Animated.parallel([
      Animated.timing(this.scaleValue, {
        toValue: 2,
        duration: 200,
        useNativeDriver: true
      }),
      Animated.timing(this.rotateValue, {
        toValue: 3,
        duration: 400,
        delay: 50,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true
      })
    ]).start();
  }

  render() {
    const offset = this.offsetValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 150]
    });
    const { fill, scale, rotate } = this.state;
    return (
      <Animated.View style={{ transform: [{ scale }, { rotate }] }}>
        <Svg width="31.64" height="29.69" viewBox="0 0 31.64 29.69">
          <AnimatedPath
            d="M30.32,16.64v9.72a2,2,0,0,1-2,2H20.57a2,2,0,0,1-2-2V20.5a2.61,2.61,0,1,0-5.21,0v5.86a2,2,0,0,1-2,2H3.65a2,2,0,0,1-2-2V16.64a3.3,3.3,0,0,1,1-2.33L14.7,2.19A1.83,1.83,0,0,1,16,1.65a1.79,1.79,0,0,1,1.29.54L29.36,14.31A3.3,3.3,0,0,1,30.32,16.64Z"
            transform="translate(-0.18 -0.15)"
            fill={fill}
            // stroke="#f35463"
            stroke="#313131"
            strokeDasharray="150"
            strokeDashoffset={offset}
            strokeWidth="3"
            origin={(31.64 / 2, 29.69 / 2)}
            scale={0.85}
          />
        </Svg>
      </Animated.View>
    );
  }
}
