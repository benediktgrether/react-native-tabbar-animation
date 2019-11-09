import React, { Component } from "react";
import { TouchableWithoutFeedback, Animated, Easing, View } from "react-native";
import { Svg, Path, G } from "react-native-svg";

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
          <Svg width="31.42" height="29.54" viewBox="0 0 31.42 29.54">
            <G>
              <Path
                d="M24,9.76a7.9,7.9,0,0,1-1.63,4.83A8,8,0,1,1,24,9.76Z"
                transform="translate(-0.29 -0.23)"
                fill={fill}
                stroke={stroke}
                stroke-miterlimit="10"
                strokeWidth="3"
              />
              <Path
                d="M30.21,26.58V27.7a.57.57,0,0,1-.6.57H2.38a.56.56,0,0,1-.59-.57V26.58A7.57,7.57,0,0,1,9.36,19H22.63A7.57,7.57,0,0,1,30.21,26.58Z"
                transform="translate(-0.29 -0.23)"
                fill={fill}
                stroke={stroke}
                stroke-miterlimit="10"
                strokeWidth="3"
              />
            </G>
          </Svg>
        </Animated.View>
      </>
    );
  }
}
