import React, { Component } from 'react';
import { TouchableWithoutFeedback, Animated, Easing } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class FeedActiveIcon extends Component {
  constructor(props) {
    super(props);
    this.offsetValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.offset();
  }

  offset() {
    this.offsetValue.setValue(0);
    Animated.timing(this.offsetValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: true
    }).start();
  }

  render() {
    const offset = this.offsetValue.interpolate({
      inputRange: [0, 1],
      outputRange: [150, 0]
    });
    return (
      <Svg width="31.64" height="29.69" viewBox="0 0 31.64 29.69">
        <Path
          d="M30.32,16.64v9.72a2,2,0,0,1-2,2H20.57a2,2,0,0,1-2-2V20.5a2.61,2.61,0,1,0-5.21,0v5.86a2,2,0,0,1-2,2H3.65a2,2,0,0,1-2-2V16.64a3.3,3.3,0,0,1,1-2.33L14.7,2.19A1.83,1.83,0,0,1,16,1.65a1.79,1.79,0,0,1,1.29.54L29.36,14.31A3.3,3.3,0,0,1,30.32,16.64Z"
          transform="translate(-0.18 -0.15)"
          fill="none"
          stroke="#313131"
          // stroke="#878787"
          strokeWidth="3"
          origin={(31.64 / 2, 29.69 / 2)}
          scale={0.85}
        />
        <AnimatedPath
          d="M30.32,16.64v9.72a2,2,0,0,1-2,2H20.57a2,2,0,0,1-2-2V20.5a2.61,2.61,0,1,0-5.21,0v5.86a2,2,0,0,1-2,2H3.65a2,2,0,0,1-2-2V16.64a3.3,3.3,0,0,1,1-2.33L14.7,2.19A1.83,1.83,0,0,1,16,1.65a1.79,1.79,0,0,1,1.29.54L29.36,14.31A3.3,3.3,0,0,1,30.32,16.64Z"
          transform="translate(-0.18 -0.15)"
          fill="none"
          // stroke="#25bfa9"
          stroke="#405DE6"
          strokeDasharray="150"
          strokeDashoffset={offset}
          // stroke-miterlimit="10"
          strokeWidth="3"
          origin={(31.64 / 2, 29.69 / 2)}
          scale={0.85}
        />

        {/* Starting Animation Rendering when it becames Active State */}
        {this.offset()}
      </Svg>
    );
  }
}
