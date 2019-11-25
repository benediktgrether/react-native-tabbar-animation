import React, { Component } from 'react';
import { TouchableWithoutFeedback, Animated, Easing } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class SearchActiveIcon extends Component {
  constructor(props) {
    super(props);
    this.offsetValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.offset();
  }
  offset() {
    this.offsetValue.setValue(0);
    Animated.timing(this.offsetValue, {
      toValue: 1,
      duration: 400,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: true
    }).start();
  }

  render() {
    const offset = this.offsetValue.interpolate({
      inputRange: [0, 1],
      outputRange: [125, 0]
    });
    return (
      <Svg width="29.17" height="29.09" viewBox="0 0 29.17 29.09">
        <Path
          d="M24,21.2A11.84,11.84,0,0,0,13.42,2a11.86,11.86,0,1,0,8.83,21l4.69,4.69a1.25,1.25,0,0,0,1.77,0h0a1.26,1.26,0,0,0,0-1.78Z"
          transform="translate(-1.42 -0.45)"
          fill="none"
          stroke="#4e4e50"
          strokeWidth="3"
          origin={(29.17 / 2, 29.09 / 2)}
          scale={0.85}
        />
        <AnimatedPath
          d="M24,21.2A11.84,11.84,0,0,0,13.42,2a11.86,11.86,0,1,0,8.83,21l4.69,4.69a1.25,1.25,0,0,0,1.77,0h0a1.26,1.26,0,0,0,0-1.78Z"
          transform="translate(-1.42 -0.45)"
          fill="none"
          stroke="#25bfa9"
          strokeDasharray="125"
          strokeDashoffset={offset}
          strokeWidth="3"
          origin={(29.17 / 2, 29.09 / 2)}
          scale={0.85}
        />

        {/* Starting Animation Rendering when it becames Active State */}
        {this.offset()}
      </Svg>
    );
  }
}
