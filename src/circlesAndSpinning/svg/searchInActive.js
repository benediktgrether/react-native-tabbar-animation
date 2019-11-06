import React, { Component } from "react";
import { TouchableWithoutFeedback, Animated } from "react-native";
import { Svg, Path } from "react-native-svg";

export default class SearchInActiveIcon extends Component {
  render() {
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
      </Svg>
    );
  }
}
