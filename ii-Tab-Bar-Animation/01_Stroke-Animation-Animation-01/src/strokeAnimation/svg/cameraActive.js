import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class CameraActiveIcon extends Component {
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
      outputRange: [150, 0]
    });
    return (
      <Svg width="29.14" height="29.14" viewBox="0 0 29.14 29.14">
        <Path
          d="M20.84,1.84H11.16a8.24,8.24,0,0,0-8.23,8.23v9.68A8.24,8.24,0,0,0,11.16,28h9.68a8.24,8.24,0,0,0,8.23-8.23V10.07A8.24,8.24,0,0,0,20.84,1.84ZM22,15.46H16.55V20.9h-1.1V15.46H10v-1.1h5.44V8.92h1.1v5.44H22Z"
          transform="translate(-1.43 -0.34)"
          fill="none"
          stroke="#313131"
          strokeWidth="3"
          origin={(29.14 / 2, 29.14 / 2)}
          scale={0.85}
        />
        <AnimatedPath
          d="M20.84,1.84H11.16a8.24,8.24,0,0,0-8.23,8.23v9.68A8.24,8.24,0,0,0,11.16,28h9.68a8.24,8.24,0,0,0,8.23-8.23V10.07A8.24,8.24,0,0,0,20.84,1.84ZM22,15.46H16.55V20.9h-1.1V15.46H10v-1.1h5.44V8.92h1.1v5.44H22Z"
          transform="translate(-1.43 -0.34)"
          fill="none"
          stroke="#405DE6"
          strokeDasharray="150"
          strokeDashoffset={offset}
          strokeWidth="3"
          origin={(29.14 / 2, 29.14 / 2)}
          scale={0.85}
        />

        {/* Starting Animation Rendering when it becames Active State */}
        {this.offset()}
      </Svg>
    );
  }
}
