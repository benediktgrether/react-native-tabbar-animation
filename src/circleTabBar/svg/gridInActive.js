import React, { Component } from "react";
import { TouchableWithoutFeedback, Animated } from "react-native";
import { Svg, G, Rect } from "react-native-svg";

export default class GridInActiveIcon extends Component {
  render() {
    return (
      // <TouchableWithoutFeedback onPress={this.hndPress}>
      <Svg width="39.6" height="39.6" viewBox="0 0 39.6 39.6">
        <G>
          <Rect y="16.8" width="6" height="6" fill="#4e4e50" />
          <Rect x="16.8" y="16.8" width="6" height="6" fill="#4e4e50" />
          <Rect y="33.6" width="6" height="6" fill="#4e4e50" />
          <Rect x="16.8" width="6" height="6" fill="#4e4e50" />
          <Rect width="6" height="6" fill="#4e4e50" />
          <Rect x="16.8" y="33.6" width="6" height="6" fill="#4e4e50" />
          <Rect x="33.6" width="6" height="6" fill="#4e4e50" />
          <Rect x="33.6" y="16.8" width="6" height="6" fill="#4e4e50" />
          <Rect x="33.6" y="33.6" width="6" height="6" fill="#4e4e50" />
        </G>
      </Svg>
      // </TouchableWithoutFeedback>
    );
  }
}
