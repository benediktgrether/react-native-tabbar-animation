import React, { Component } from "react";
import { TouchableWithoutFeedback, Animated } from "react-native";
import { Svg, Path } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

getInitinalStat = () => {
  const anim = new Animated.Value(0);
  const offset = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [1000, 0]
  });
  return { anim, offset };
};

export default class SearchActiveIcon extends Component {
  state = getInitinalStat();

  // componentWillMount() {
  //   state = getInitinalStat();
  // }

  renderAnimation = () => {
    const { anim } = this.state;
    Animated.timing(anim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true
    }).start();
  };

  render() {
    const { offset } = this.state;
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
          strokeDasharray="1000"
          strokeDashoffset={offset}
          stroke-miterlimit="10"
          strokeWidth="3"
        />

        {/* Starting Animation Rendering when it becames Active State */}
        {this.renderAnimation()}
      </Svg>
    );
  }
}
