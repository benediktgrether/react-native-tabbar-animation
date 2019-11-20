import React, { Component } from 'react';
import { View, Animated, Alert } from 'react-native';

// const animationExport = {
//   func1: function animationOutline(offsetValue) {
//     Animated.timing(offsetValue, {
//       toValue: 1,
//       duration: 400,
//       useNativeDriver: true
//     }).start(console.log(offsetValue));
//   }
//   // func1: function test() {
//   //   Alert.alert('Test');
//   // }
// };

// export { animationExport };

// animationOutline() {
//   Animated.timing(this.offsetValue, {
//     toValue: 1,
//     duration: 400,
//     useNativeDriver: true
//   }).start(() => {
//     this.animationActive();
//   });
// }

var Anims = {
  firstAnim(offsetValue) {
    Animated.timing(offsetValue, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true
    }).start(() => console.log(offsetValue, 'Done!'));
  }
};

module.exports = Anims;
