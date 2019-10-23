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

export default class HomeIcon extends Component {
  state = getInitinalStat();

  // componentWillMount() {
  //   state = getInitinalStat();
  // }

  hndPress = () => {
    const { anim } = this.state;
    Animated.timing(anim, {
      toValue: 1,
      duration: 10000
    }).start();
  };

  render() {
    const { offset } = this.state;
    return (
      // <TouchableWithoutFeedback onPress={this.hndPress}>
      <Svg width="41.97" height="39.12" viewBox="0 0 41.97 39.12">
        <AnimatedPath
          d="M37.89,23.39V34.26a2.21,2.21,0,0,1-2.21,2.21H27a2.21,2.21,0,0,1-2.21-2.21V27.7a2.91,2.91,0,1,0-5.82,0v6.56a2.2,2.2,0,0,1-2.2,2.21H8.09a2.21,2.21,0,0,1-2.2-2.21V23.39A3.69,3.69,0,0,1,7,20.79L20.43,7.25a2.08,2.08,0,0,1,1.46-.6,2,2,0,0,1,1.44.6L36.81,20.79A3.65,3.65,0,0,1,37.89,23.39Z"
          transform="translate(-4.89 -5.65)"
          fill="#4e4e50"
          stroke="blue"
          strokeDasharray="1000"
          strokeDashoffset={offset}
          stroke-miterlimit="10"
          stroke-width="2"
        />
      </Svg>
      // </TouchableWithoutFeedback>
    );
  }
}
