import React, { Component } from "react";
import { TouchableWithoutFeedback, Animated } from "react-native";
import { Svg, Path, G } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

getInitinalStat = () => {
  const anim = new Animated.Value(0);
  const offset = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [1000, 0]
  });
  return { anim, offset };
};

export default class ProfilActiveIcon extends Component {
  state = getInitinalStat();

  // componentWillMount() {
  //   state = getInitinalStat();
  // }

  renderAnimation = () => {
    const { anim } = this.state;
    Animated.timing(anim, {
      toValue: 1,
      duration: 10000
    }).start();
  };

  render() {
    const { offset } = this.state;
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
            strokeDasharray="1000"
            strokeDashoffset={offset}
            stroke-miterlimit="10"
            strokeWidth="3"
          />
          <AnimatedPath
            d="M41.73,38.09v1.55a.77.77,0,0,1-.82.79H3.09a.77.77,0,0,1-.82-.79V38.09A10.51,10.51,0,0,1,12.78,27.57H31.22A10.51,10.51,0,0,1,41.73,38.09Z"
            transform="translate(-0.77 -2.07)"
            fill="none"
            stroke="#25bfa9"
            strokeDasharray="1000"
            strokeDashoffset={offset}
            stroke-miterlimit="10"
            strokeWidth="3"
          />
        </G>

        {/* Starting Animation Rendering when it becames Active State */}
        {this.renderAnimation()}
      </Svg>
    );
  }
}
