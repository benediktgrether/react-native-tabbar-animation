/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Animated, Easing, View, StyleSheet } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';

// const Animations = require('../components/AnimationValue');
const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class SearchActiveIcon extends Component {
  constructor(props) {
    super(props);
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
      Animated.spring(this.scaleValue, {
        toValue: 2,
        // duration: 200,
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
      outputRange: [0, 125]
    });
    const { fill, scale, rotate } = this.state;
    return (
      <Animated.View style={{ transform: [{ scale }, { rotate }] }}>
        <Svg width="29.17" height="29.09" viewBox="0 0 29.17 29.09">
          <AnimatedPath
            d="M24,21.2A11.84,11.84,0,0,0,13.42,2a11.86,11.86,0,1,0,8.83,21l4.69,4.69a1.25,1.25,0,0,0,1.77,0h0a1.26,1.26,0,0,0,0-1.78Z"
            transform="translate(-1.42 -0.45)"
            fill={fill}
            // stroke="#f35463"
            stroke="#313131"
            strokeDasharray="125"
            strokeDashoffset={offset}
            strokeWidth="3"
            origin={(29.17 / 2, 29.09 / 2)}
            scale={0.85}
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
