import React, { Component } from "react";
import { TouchableWithoutFeedback, Animated, Easing } from "react-native";
import { Svg, Path } from "react-native-svg";

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
    this.rotation();
  }

  rotation() {
    Animated.timing(this.rotateYValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.inOut(Easing.quad),
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
      <Animated.View style={{ transform: [{ rotateY }] }}>
        <Svg width="31.64" height="29.69" viewBox="0 0 31.64 29.69">
          <Path
            d="M30.32,16.64v9.72a2,2,0,0,1-2,2H20.57a2,2,0,0,1-2-2V20.5a2.61,2.61,0,1,0-5.21,0v5.86a2,2,0,0,1-2,2H3.65a2,2,0,0,1-2-2V16.64a3.3,3.3,0,0,1,1-2.33L14.7,2.19A1.83,1.83,0,0,1,16,1.65a1.79,1.79,0,0,1,1.29.54L29.36,14.31A3.3,3.3,0,0,1,30.32,16.64Z"
            transform="translate(-0.18 -0.15)"
            fill={fill}
            stroke={stroke}
            strokeWidth="3"
          />
        </Svg>
      </Animated.View>
    );
  }
}
