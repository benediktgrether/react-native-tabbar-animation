/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Animated, Easing, View, StyleSheet } from 'react-native';
import { Svg, Path, Circle, G } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class FeedActiveIcon extends Component {
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
      outputRange: [0, 95]
    });
    const { fill, scale, rotate } = this.state;
    return (
      <Animated.View style={{ transform: [{ scale }, { rotate }] }}>
        <Svg width="31.42" height="29.54" viewBox="0 0 31.42 29.54">
          <G>
            <AnimatedPath
              d="M24,9.76a7.9,7.9,0,0,1-1.63,4.83A8,8,0,1,1,24,9.76Z"
              transform="translate(-0.29 -0.23)"
              fill={fill}
              // stroke="#f35463"
              stroke="#313131"
              strokeDasharray="95"
              strokeDashoffset={offset}
              stroke-miterlimit="10"
              strokeWidth="3"
              origin={(31.42 / 2, 29.54 / 2)}
              scale={0.85}
            />
            <AnimatedPath
              d="M30.21,26.58V27.7a.57.57,0,0,1-.6.57H2.38a.56.56,0,0,1-.59-.57V26.58A7.57,7.57,0,0,1,9.36,19H22.63A7.57,7.57,0,0,1,30.21,26.58Z"
              transform="translate(-0.29 -0.23)"
              fill={fill}
              // stroke="#f35463"
              stroke="#313131"
              strokeDasharray="95"
              strokeDashoffset={offset}
              stroke-miterlimit="10"
              strokeWidth="3"
              origin={(31.42 / 2, 29.54 / 2)}
              scale={0.85}
            />
          </G>
        </Svg>
      </Animated.View>
    );
  }
}
