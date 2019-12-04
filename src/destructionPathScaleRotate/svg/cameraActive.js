/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Animated, Easing, View, StyleSheet, Alert } from 'react-native';
import { Svg, Path, Rect } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class CameraActiveIcon extends Component {
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
      outputRange: [0, 150]
    });
    const { fill, scale, rotate } = this.state;
    return (
      <Animated.View style={{ transform: [{ scale }, { rotate }] }}>
        <Svg width="29.14" height="29.14" viewBox="0 0 29.14 29.14">
          <AnimatedPath
            d="M20.84,1.84H11.16a8.24,8.24,0,0,0-8.23,8.23v9.68A8.24,8.24,0,0,0,11.16,28h9.68a8.24,8.24,0,0,0,8.23-8.23V10.07A8.24,8.24,0,0,0,20.84,1.84ZM22,15.46H16.55V20.9h-1.1V15.46H10v-1.1h5.44V8.92h1.1v5.44H22Z"
            transform="translate(-1.43 -0.34)"
            fill={fill}
            // stroke="#f35463"
            stroke="#313131"
            strokeDasharray="150"
            strokeDashoffset={offset}
            strokeWidth="3"
            origin={(29.14 / 2, 29.14 / 2)}
            scale={0.85}
          />
        </Svg>
      </Animated.View>
    );
  }
}
