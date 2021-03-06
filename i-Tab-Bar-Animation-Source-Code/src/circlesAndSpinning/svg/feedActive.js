import React, { Component } from 'react';
import { Animated, Easing, View, StyleSheet } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';

// Make Own Animation Component
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class FeedActiveIcon extends Component {
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
          <Svg width="31.64" height="29.69" viewBox="0 0 31.64 29.69">
            <AnimatedPath
              d="M30.32,16.64v9.72a2,2,0,0,1-2,2H20.57a2,2,0,0,1-2-2V20.5a2.61,2.61,0,1,0-5.21,0v5.86a2,2,0,0,1-2,2H3.65a2,2,0,0,1-2-2V16.64a3.3,3.3,0,0,1,1-2.33L14.7,2.19A1.83,1.83,0,0,1,16,1.65a1.79,1.79,0,0,1,1.29.54L29.36,14.31A3.3,3.3,0,0,1,30.32,16.64Z"
              transform="translate(-0.18 -0.15)"
              fill={fill}
              stroke={stroke}
              strokeWidth="3"
              origin={(31.64 / 2, 29.69 / 2)}
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
              // stroke="#25bfa9"
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
