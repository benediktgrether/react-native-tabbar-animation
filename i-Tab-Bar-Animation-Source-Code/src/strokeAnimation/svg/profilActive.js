import React, { Component } from 'react';
import { TouchableWithoutFeedback, Animated, Easing } from 'react-native';
import { Svg, Path, G } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class FeedActiveIcon extends Component {
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
      outputRange: [95, 0]
    });
    return (
      <Svg width="31.42" height="29.54" viewBox="0 0 31.42 29.54">
        <G>
          <Path
            d="M24,9.76a7.9,7.9,0,0,1-1.63,4.83A8,8,0,1,1,24,9.76Z"
            transform="translate(-0.29 -0.23)"
            fill="none"
            stroke="#313131"
            stroke-miterlimit="10"
            strokeWidth="3"
            origin={(31.42 / 2, 29.54 / 2)}
            scale={0.85}
          />
          <Path
            d="M30.21,26.58V27.7a.57.57,0,0,1-.6.57H2.38a.56.56,0,0,1-.59-.57V26.58A7.57,7.57,0,0,1,9.36,19H22.63A7.57,7.57,0,0,1,30.21,26.58Z"
            transform="translate(-0.29 -0.23)"
            fill="none"
            stroke="#313131"
            stroke-miterlimit="10"
            strokeWidth="3"
            origin={(31.42 / 2, 29.54 / 2)}
            scale={0.85}
          />
        </G>
        <G>
          <AnimatedPath
            d="M24,9.76a7.9,7.9,0,0,1-1.63,4.83A8,8,0,1,1,24,9.76Z"
            transform="translate(-0.29 -0.23)"
            fill="none"
            stroke="#405DE6"
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
            fill="none"
            stroke="#405DE6"
            strokeDasharray="95"
            strokeDashoffset={offset}
            stroke-miterlimit="10"
            strokeWidth="3"
            origin={(31.42 / 2, 29.54 / 2)}
            scale={0.85}
          />
        </G>

        {/* Starting Animation Rendering when it becames Active State */}
        {this.offset()}
      </Svg>
    );
  }
}
