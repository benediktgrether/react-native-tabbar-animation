import React, { Component } from "react";

import {
  View,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Animated
} from "react-native";
import { Svg, Path } from "react-native-svg";
import * as shape from "d3-shape";

import StaticTabbar from "./StaticTabbar";

import feedInActive from "./../svg/feedInActive";
import gridInActive from "./../svg/gridInActive";
import searchInActive from "./../svg/searchInActive";
import profilInActive from "./../svg/profilInActive";

const tabsIcon = [
  { name: feedInActive },
  { name: feedInActive },
  { name: gridInActive },
  { name: searchInActive },
  { name: profilInActive }
];

const { width } = Dimensions.get("window");
const tabWidth = width / tabsIcon.length;
const height = 64;

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

//   .curve(shape.curveBasis)
const left = shape
  .line()
  .x(d => d.x)
  .y(d => d.y)([
  // Pass some Data for the Curve Function
  // Draw 3 Curved for left active and right Tab.
  { x: 0, y: 0 },
  { x: width, y: 0 }
]);

const tab = shape
  .line()
  .x(d => d.x)
  .y(d => d.y)
  .curve(shape.curveBasis)([
  { x: width, y: 0 },
  { x: width + 5, y: 0 },
  { x: width + 10, y: 10 },
  { x: width + 15, y: height },
  { x: width + tabWidth - 15, y: height },
  { x: width + tabWidth - 10, y: 10 },
  { x: width + tabWidth - 5, y: 0 },
  { x: width + tabWidth, y: 0 }
]);

const right = shape
  .line()
  .x(d => d.x)
  .y(d => d.y)([
  // Pass some Data for the Curve Function
  // Draw 3 Curved for left active and right Tab.
  { x: width + tabWidth, y: 0 },
  { x: width * 2, y: height },
  { x: 0, y: height },
  { x: 0, y: 0 }
]);

const d = `${left}${tab}${right}`;

export default class CircleTabBar extends Component {
  render() {
    // console.log(this.state.data);
    return (
      <>
        <View {...{ width, height }}>
          <AnimatedSvg width={width * 2} {...{ height }}>
            <Path {...{ d }} fill="white" />
          </AnimatedSvg>
          <View style={StyleSheet.absoluteFill}>
            <StaticTabbar {...{ tabsIcon }} />
          </View>
        </View>
        <SafeAreaView style={styles.safeArea} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "white"
  }
});
