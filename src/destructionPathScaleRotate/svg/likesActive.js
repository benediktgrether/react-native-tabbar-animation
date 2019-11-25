/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Animated, Easing, View, StyleSheet, Alert } from 'react-native';
import { Svg, Path, Rect } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class LikesActiveIcon extends Component {
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
      fill: '#f35463',
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
      outputRange: [0, 90]
    });
    const { fill, scale, rotate } = this.state;
    return (
      <Animated.View style={{ transform: [{ scale }, { rotate }] }}>
        <Svg width="31.66" height="27.74" viewBox="0 0 31.66 27.74">
          <AnimatedPath
            d="M29.25,15.6C27.43,19,19.77,24.89,17,27a1.69,1.69,0,0,1-1,.33A1.67,1.67,0,0,1,15,27C12.23,24.89,4.57,19,2.75,15.6a9.1,9.1,0,0,1,3-11.89,7.57,7.57,0,0,1,4-1.17A7.88,7.88,0,0,1,16,5.79a7.84,7.84,0,0,1,6.28-3.25,7.6,7.6,0,0,1,4,1.17A9.1,9.1,0,0,1,29.25,15.6Z"
            transform="translate(-0.17 -1.04)"
            fill={fill}
            stroke="#f35463"
            strokeDasharray="90"
            strokeDashoffset={offset}
            strokeWidth="3"
            origin={(31.66 / 2, 27.74 / 2)}
            scale={0.85}
          />
        </Svg>
      </Animated.View>
    );
  }
}
