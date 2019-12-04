import React, { Component } from 'react';
import { TouchableWithoutFeedback, Animated } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default class LikesInActiveIcon extends Component {
  render() {
    return (
      // <TouchableWithoutFeedback onPress={this.hndPress}>
      <Svg width="31.66" height="27.74" viewBox="0 0 31.66 27.74">
        <Path
          d="M29.25,15.6C27.43,19,19.77,24.89,17,27a1.69,1.69,0,0,1-1,.33A1.67,1.67,0,0,1,15,27C12.23,24.89,4.57,19,2.75,15.6a9.1,9.1,0,0,1,3-11.89,7.57,7.57,0,0,1,4-1.17A7.88,7.88,0,0,1,16,5.79a7.84,7.84,0,0,1,6.28-3.25,7.6,7.6,0,0,1,4,1.17A9.1,9.1,0,0,1,29.25,15.6Z"
          transform="translate(-0.17 -1.04)"
          fill="none"
          stroke="#313131"
          strokeWidth="3"
          origin={(31.66 / 2, 27.74 / 2)}
          scale={0.85}
        />
      </Svg>
      // </TouchableWithoutFeedback>
    );
  }
}
