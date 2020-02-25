import React, { Component } from 'react';
import { Animated, Easing, View, StyleSheet } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';

// Make Own Animation Component
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class CameraActiveIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotateY: 0,
      fill: 'none',
      // stroke: '#4e4e50'
      stroke: '#313131'
    };

    this.rotateYValue = new Animated.Value(0);
    this.radiusValue = new Animated.Value(0);
    this.strokeWidthValue = new Animated.Value(0);
    this.scaleValue = new Animated.Value(0);

    // const colorValue = '#25bfa9';
    const colorValue = '#313131';

    let fillColor = false;
    let self = this;
    this.rotateYValue.addListener((rotateY) => {
      self.setState({ rotateY: rotateY.value });
      if (rotateY.value >= 0.5 && fillColor === false) {
        // fill Color on True to get the change only one Time
        fillColor = true;
        // this.state.fill to fill the Icon
        self.state.fill = colorValue;
        // this.state.stroke get the new outline color
        self.state.stroke = 'none';
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
      }),
      Animated.timing(this.scaleValue, {
        toValue: 2,
        delay: 100,
        duration: 400,
        useNativeDriver: true
      })
    ]).start();
  }

  render() {
    const rotateY = this.rotateYValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    });
    const scale = this.scaleValue.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [1, 1.5, 1]
    });

    const changeRadius = this.radiusValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0', '22']
    });

    const changeStrokeWidth = this.strokeWidthValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['5', '0']
    });

    const { fill, stroke } = this.state;
    return (
      <>
        <Animated.View style={{ transform: [{ rotateY }, { scale }] }}>
          <Svg width="29.14" height="29.14" viewBox="0 0 29.14 29.14">
            <AnimatedPath
              d="M20.84,1.84H11.16a8.24,8.24,0,0,0-8.23,8.23v9.68A8.24,8.24,0,0,0,11.16,28h9.68a8.24,8.24,0,0,0,8.23-8.23V10.07A8.24,8.24,0,0,0,20.84,1.84ZM22,15.46H16.55V20.9h-1.1V15.46H10v-1.1h5.44V8.92h1.1v5.44H22Z"
              transform="translate(-1.43 -0.34)"
              fill={fill}
              stroke={stroke}
              strokeWidth="3"
              origin={(29.14 / 2, 29.14 / 2)}
              scale={0.85}
            />
          </Svg>
        </Animated.View>
        <View style={styles.circlePositon}>
          <Svg width="60" height="60" viewBox="0 0 60 60">
            <AnimatedCircle
              cx="30"
              cy="30"
              r={changeRadius}
              fill="none"
              stroke="#313131"
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
