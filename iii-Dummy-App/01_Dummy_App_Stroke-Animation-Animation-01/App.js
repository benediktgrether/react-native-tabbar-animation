import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
console.disableYellowBox = true;

import Routes from './src/routes/Routes';

export default function App() {
  return <Routes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ea3345',
    justifyContent: 'flex-end'
  }
});
