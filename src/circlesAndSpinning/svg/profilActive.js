import React, { Component } from "react";
import { TouchableWithoutFeedback, Animated, Easing } from "react-native";
import { Svg, Path, G } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class FeedActiveIcon extends Component {
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
      outputRange: [95, 0]
    });
    return (
      <Svg width="42.22" height="39.55" viewBox="0 0 42.22 39.55">
        <G>
          <Path
            d="M33.16,14.72a11,11,0,0,1-2.27,6.71,11.13,11.13,0,1,1,2.27-6.71Z"
            transform="translate(-0.77 -2.07)"
            fill="none"
            stroke="#4e4e50"
            stroke-miterlimit="10"
            strokeWidth="3"
          />
          <Path
            d="M41.73,38.09v1.55a.77.77,0,0,1-.82.79H3.09a.77.77,0,0,1-.82-.79V38.09A10.51,10.51,0,0,1,12.78,27.57H31.22A10.51,10.51,0,0,1,41.73,38.09Z"
            transform="translate(-0.77 -2.07)"
            fill="none"
            stroke="#4e4e50"
            stroke-miterlimit="10"
            strokeWidth="3"
          />
        </G>
        <G>
          <AnimatedPath
            d="M33.16,14.72a11,11,0,0,1-2.27,6.71,11.13,11.13,0,1,1,2.27-6.71Z"
            transform="translate(-0.77 -2.07)"
            fill="none"
            stroke="#25bfa9"
            strokeDasharray="95"
            strokeDashoffset={offset}
            stroke-miterlimit="10"
            strokeWidth="3"
          />
          <AnimatedPath
            d="M41.73,38.09v1.55a.77.77,0,0,1-.82.79H3.09a.77.77,0,0,1-.82-.79V38.09A10.51,10.51,0,0,1,12.78,27.57H31.22A10.51,10.51,0,0,1,41.73,38.09Z"
            transform="translate(-0.77 -2.07)"
            fill="none"
            stroke="#25bfa9"
            strokeDasharray="95"
            strokeDashoffset={offset}
            stroke-miterlimit="10"
            strokeWidth="3"
          />
        </G>

        {/* Starting Animation Rendering when it becames Active State */}
        {this.offset()}
      </Svg>
    );
  }
}
