import * as React from "react";
import { Animated, TouchableOpacity, StyleSheet } from "react-native";

const Tab = ({ focusAnim, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={[
          styles.animatedView,

          {
            backgroundColor: focusAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ["transparent", "tomato"]
            })
          }
        ]}
      />
      <Animated.Text
        style={{
          color: focusAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["#444", "#fff"]
          })
        }}
      >
        {title}
      </Animated.Text>
    </TouchableOpacity>
  );
};

export default Tab;

const styles = StyleSheet.create({
  animatedView: {
    padding: 10,
    borderRadius: 10
  }
});
