import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
console.disableYellowBox = true;

import CircleTabBar from './src/circleTabBar/components/CircleTabBar';

export default function App() {
  return (
    <View style={styles.container}>
      <CircleTabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ea3345',
    justifyContent: 'flex-end'
  }
});
