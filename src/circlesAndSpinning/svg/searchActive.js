import React, { Component } from 'react';
import {
  TouchableWithoutFeedback,
  Animated,
  Easing,
  View,
  StyleSheet
} from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';

// Make Own Animation Component
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class FeedActiveIcon extends Component {
  constructor() {
    super();
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      rotateY: '0deg',
      fill: 'none',
      stroke: '#4e4e50'
    };

    const colorValue = '#25bfa9';

    let fillColor = false;

    this.rotateYValue = new Animated.Value(0);
    this.radiusValue = new Animated.Value(0);
    this.strokeWidthValue = new Animated.Value(0);

    this.rotateYValue.addListener((rotateY) => {
      // eslint-disable-next-line react/no-unused-state
      this.setState({ rotateY: rotateY.value });
      if (rotateY.value >= 0.5 && fillColor === false) {
        // fill Color on True to get the change only one Time
        fillColor = true;
        // this.state.fill to fill the Icon
        this.state.fill = colorValue;
        // this.state.stroke get the new outline color
        this.state.stroke = 'none';
      }
    });
  }

  componentDidMount() {
    this.animationCircle();
  }

  animationCircle() {
    Animated.parallel([
      Animated.timing(this.radiusValue, {
        toValue: 1,
        duration: 400,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true
      }),
      Animated.timing(this.strokeWidthValue, {
        toValue: 1,
        delay: 100,
        duration: 400,
        useNativeDriver: true
      }),
      Animated.timing(this.rotateYValue, {
        toValue: 1,
        delay: 100,
        duration: 400,
        // easing: Easing.inOut(Easing.quad),
        useNativeDriver: true
      })
    ]).start();
  }

  render() {
    const rotateY = this.rotateYValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    });

    const changeRadius = this.radiusValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0', '33']
    });

    const changeStrokeWidth = this.strokeWidthValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['5', '0']
    });

    const { fill, stroke } = this.state;
    return (
      <>
        <Animated.View style={{ transform: [{ rotateY }] }}>
          <Svg width="29.17" height="29.09" viewBox="0 0 29.17 29.09">
            <AnimatedPath
              d="M24,21.2A11.84,11.84,0,0,0,13.42,2a11.86,11.86,0,1,0,8.83,21l4.69,4.69a1.25,1.25,0,0,0,1.77,0h0a1.26,1.26,0,0,0,0-1.78Z"
              transform="translate(-1.42 -0.45)"
              fill={fill}
              stroke={stroke}
              strokeWidth="3"
            />
          </Svg>
        </Animated.View>
        {/* <View style={{ position: "absolute", top: -18, left: -25 }}> */}
        <View style={styles.circlePositon}>
          <Svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            // style={{ backgroundColor: "rgba(1, 1, 1, 0.5)" }}
          >
            <AnimatedCircle
              cx="40"
              cy="35"
              r={changeRadius}
              fill="none"
              stroke="#25bfa9"
              strokeWidth={changeStrokeWidth}
            />
          </Svg>
        </View>
      </>
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
