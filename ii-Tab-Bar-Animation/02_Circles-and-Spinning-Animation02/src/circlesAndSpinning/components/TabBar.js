import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import TabItem from './TabItem';

class TabBar extends Component {
  render() {
    const { navigation } = this.props;
    const { routes, index } = navigation.state;
    return (
      <View style={styles.container}>
        {routes.map((route, i) => (
          <TabItem
            navigation={navigation}
            key={route.routeName}
            {...route}
            isActive={index === i}
            label={false}
          />
        ))}
      </View>
    );
  }
}

export default TabBar;

const styles = StyleSheet.create({
  container: {
    height: 46,
    // backgroundColor: '#d6d6d6',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: StyleSheet.hairlineWidth
  }
});
