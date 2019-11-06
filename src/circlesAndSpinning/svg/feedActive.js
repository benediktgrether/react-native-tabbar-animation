import React, { Component } from "react";
import { TouchableWithoutFeedback, Animated, Easing } from "react-native";
import { Svg, Path } from "react-native-svg";

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
      outputRange: [150, 0]
    });
    return (
      <Svg width="42.22" height="39.55" viewBox="0 0 42.22 39.55">
        <Path
          d="M41.61,24.24V37.56a2.71,2.71,0,0,1-2.71,2.71H28.27a2.71,2.71,0,0,1-2.71-2.71v-8a3.57,3.57,0,1,0-7.13,0v8a2.7,2.7,0,0,1-2.7,2.71H5.09a2.7,2.7,0,0,1-2.7-2.71V24.24a4.54,4.54,0,0,1,1.32-3.19L20.22,4.46A2.51,2.51,0,0,1,22,3.73a2.47,2.47,0,0,1,1.77.73L40.29,21.05A4.54,4.54,0,0,1,41.61,24.24Z"
          transform="translate(-0.89 -2.23)"
          fill="none"
          stroke="#4e4e50"
          strokeWidth="3"
        />
        <AnimatedPath
          d="M41.61,24.24V37.56a2.71,2.71,0,0,1-2.71,2.71H28.27a2.71,2.71,0,0,1-2.71-2.71v-8a3.57,3.57,0,1,0-7.13,0v8a2.7,2.7,0,0,1-2.7,2.71H5.09a2.7,2.7,0,0,1-2.7-2.71V24.24a4.54,4.54,0,0,1,1.32-3.19L20.22,4.46A2.51,2.51,0,0,1,22,3.73a2.47,2.47,0,0,1,1.77.73L40.29,21.05A4.54,4.54,0,0,1,41.61,24.24Z"
          transform="translate(-0.89 -2.23)"
          fill="none"
          stroke="#25bfa9"
          strokeDasharray="150"
          strokeDashoffset={offset}
          // stroke-miterlimit="10"
          strokeWidth="3"
        />

        {/* Starting Animation Rendering when it becames Active State */}
        {this.offset()}
      </Svg>
    );
  }
}
