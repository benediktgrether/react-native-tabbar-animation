import React, { Component } from "react";
import { TouchableWithoutFeedback, Animated, Easing } from "react-native";
import { Svg, Path } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class SearchActiveIcon extends Component {
  constructor() {
    super();
    this.offsetValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.offset();
  }
  offset() {
    this.offsetValue.setValue(0);
    Animated.timing(this.offsetValue, {
      toValue: 1,
      duration: 1000,
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
      <Svg width="42.22" height="39.55" viewBox="0 0 42.22 39.55">
        <Path
          d="M33.21,30.67a16.75,16.75,0,1,0-2.48,2.49l6.56,6.56a1.76,1.76,0,0,0,2.48,0h0a1.74,1.74,0,0,0,0-2.48Z"
          transform="translate(-2.22 -2.27)"
          fill="none"
          stroke="#4e4e50"
          stroke-miterlimit="10"
          strokeWidth="3"
        />
        <AnimatedPath
          d="M33.21,30.67a16.75,16.75,0,1,0-2.48,2.49l6.56,6.56a1.76,1.76,0,0,0,2.48,0h0a1.74,1.74,0,0,0,0-2.48Z"
          transform="translate(-2.22 -2.27)"
          fill="none"
          stroke="#25bfa9"
          strokeDasharray="125"
          strokeDashoffset={offset}
          stroke-miterlimit="10"
          strokeWidth="3"
        />

        {/* Starting Animation Rendering when it becames Active State */}
        {this.offset()}
      </Svg>
    );
  }
}
