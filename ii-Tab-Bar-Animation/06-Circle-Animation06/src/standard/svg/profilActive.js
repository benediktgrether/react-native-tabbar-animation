import React, { Component } from 'react';
import { TouchableWithoutFeedback, Animated } from 'react-native';
import { Svg, Path, G } from 'react-native-svg';

export default class ProfilActiveIcon extends Component {
  render() {
    return (
      <Svg width="31.42" height="29.54" viewBox="0 0 31.42 29.54">
        <G>
          <Path
            d="M24,9.76a7.9,7.9,0,0,1-1.63,4.83A8,8,0,1,1,24,9.76Z"
            transform="translate(-0.29 -0.23)"
            fill="#313131"
            origin={(31.42 / 2, 29.54 / 2)}
            scale={0.85}
          />
          <Path
            d="M30.21,26.58V27.7a.57.57,0,0,1-.6.57H2.38a.56.56,0,0,1-.59-.57V26.58A7.57,7.57,0,0,1,9.36,19H22.63A7.57,7.57,0,0,1,30.21,26.58Z"
            transform="translate(-0.29 -0.23)"
            fill="#313131"
            origin={(31.42 / 2, 29.54 / 2)}
            scale={0.85}
          />
        </G>
      </Svg>
    );
  }
}
