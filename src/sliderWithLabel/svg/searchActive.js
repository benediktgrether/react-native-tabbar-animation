import React, { Component } from "react";
import { TouchableWithoutFeedback, Animated, Easing, View } from "react-native";
import { Svg, Path } from "react-native-svg";

// Make Own Animation Component
const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class FeedActiveIcon extends Component {
  constructor() {
    super();
    this.state = {
      rotateY: 0,
      fill: "none",
      stroke: "#4e4e50"
    };

    const colorValue = "#25bfa9";

    let fillColor = false;

    this.rotateYValue = new Animated.Value(0);

    this.rotateYValue.addListener(rotateY => {
      this.setState({ rotateY: rotateY.value });
      if (rotateY.value >= 0.5 && fillColor == false) {
        // fill Color on True to get the change only one Time
        fillColor = true;
        // this.state.fill to fill the Icon
        this.state.fill = colorValue;
        // this.state.stroke get the new outline color
        this.state.stroke = "none";
      }
    });
  }

  componentDidMount() {
    this.animationCircle();
  }

  animationCircle() {
    Animated.timing(this.rotateYValue, {
      toValue: 1,
      delay: 100,
      duration: 400,
      // easing: Easing.inOut(Easing.quad),
      useNativeDriver: true
    }).start();
  }

  render() {
    const rotateY = this.rotateYValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "180deg"]
    });

    const { fill, stroke } = this.state;
    return (
      <>
        <Animated.View style={{ transform: [{ rotateY }] }}>
          <Svg width="29.17" height="29.09" viewBox="0 0 29.17 29.09">
            <AnimatedPath
              d="M24,21.2A11.84,11.84,0,0,0,13.42,2a11.86,11.86,0,1,0,8.83,21l4.69,4.69a1.25,1.25,0,0,0,1.77,0h0a1.26,1.26,0,0,0,0-1.78Z"
              transform="translate(-1.42 -0.45)"
              fill={fill}
              stroke={stroke}
              strokeWidth="3"
            />
          </Svg>
        </Animated.View>
      </>
    );
  }
}
