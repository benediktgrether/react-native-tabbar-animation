import React, { Component } from 'react';
import { View, Animated } from 'react-native';

const animationExport = {
  func1: function animationOutline() {
    Animated.timing(this.offsetValue, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true
    }).start();
  }
};

export default animationExport;
