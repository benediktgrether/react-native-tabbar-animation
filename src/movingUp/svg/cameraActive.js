/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Animated, Easing, View, StyleSheet } from 'react-native';
import { Svg, Path, Rect } from 'react-native-svg';

export default class CameraActiveIcon extends Component {
  render() {
    return (
      <View>
        <Svg width="29.14" height="29.14" viewBox="0 0 29.14 29.14">
          <Path
            d="M20.84,1.84H11.16a8.24,8.24,0,0,0-8.23,8.23v9.68A8.24,8.24,0,0,0,11.16,28h9.68a8.24,8.24,0,0,0,8.23-8.23V10.07A8.24,8.24,0,0,0,20.84,1.84ZM22,15.46H16.55V20.9h-1.1V15.46H10v-1.1h5.44V8.92h1.1v5.44H22Z"
            transform="translate(-1.43 -0.34)"
            // fill="#25bfa9"
            fill="#313131"
            origin={(29.14 / 2, 29.14 / 2)}
            scale={0.85}
          />
        </Svg>
      </View>
    );
  }
}
