import React, { Component } from 'react';
import { TouchableWithoutFeedback, Animated } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class FeedInActiveIcon extends Component {
  constructor() {
    super();
    this.offsetValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.animationOutline();
  }

  animationOutline() {
    Animated.timing(this.offsetValue, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true
    }).start();
  }

  render() {
    const offset = this.offsetValue.interpolate({
      inputRange: [0, 1],
      outputRange: [150, 0]
    });
    return (
      // <TouchableWithoutFeedback onPress={this.hndPress}>
      <Svg width="31.64" height="29.69" viewBox="0 0 31.64 29.69">
        <AnimatedPath
          d="M30.32,16.64v9.72a2,2,0,0,1-2,2H20.57a2,2,0,0,1-2-2V20.5a2.61,2.61,0,1,0-5.21,0v5.86a2,2,0,0,1-2,2H3.65a2,2,0,0,1-2-2V16.64a3.3,3.3,0,0,1,1-2.33L14.7,2.19A1.83,1.83,0,0,1,16,1.65a1.79,1.79,0,0,1,1.29.54L29.36,14.31A3.3,3.3,0,0,1,30.32,16.64Z"
          transform="translate(-0.18 -0.15)"
          fill="none"
          stroke="#4e4e50"
          strokeDasharray="150"
          strokeDashoffset={offset}
          strokeWidth="3"
        />
      </Svg>
      // </TouchableWithoutFeedback>
    );
  }
}
