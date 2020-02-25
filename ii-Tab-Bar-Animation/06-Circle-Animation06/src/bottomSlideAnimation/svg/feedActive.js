/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Animated, Easing, View, StyleSheet } from 'react-native';
import { Svg, Path, Rect } from 'react-native-svg';

export default class FeedActiveIcon extends Component {
  render() {
    return (
      <View>
        <Svg width="31.64" height="29.69" viewBox="0 0 31.64 29.69">
          <Path
            d="M30.32,16.64v9.72a2,2,0,0,1-2,2H20.57a2,2,0,0,1-2-2V20.5a2.61,2.61,0,1,0-5.21,0v5.86a2,2,0,0,1-2,2H3.65a2,2,0,0,1-2-2V16.64a3.3,3.3,0,0,1,1-2.33L14.7,2.19A1.83,1.83,0,0,1,16,1.65a1.79,1.79,0,0,1,1.29.54L29.36,14.31A3.3,3.3,0,0,1,30.32,16.64Z"
            transform="translate(-0.18 -0.15)"
            // fill="#25bfa9"
            fill="#313131"
            origin={(31.64 / 2, 29.69 / 2)}
            scale={0.85}
          />
        </Svg>
      </View>
    );
  }
}
