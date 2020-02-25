import * as React from 'react';
import { SafeAreaView } from 'react-native';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import FeedScreen from '../screen/FeedScreen';
import SearchScreen from '../screen/SearchScreen';
import ProfilScreen from '../screen/ProfilScreen';
import CameraScreen from '../screen/CameraScreen';
import LikesScreen from '../screen/LikesScreen';

import TabBar from '../movingUp/components/TabBar';

const bottomTabBar = createBottomTabNavigator(
  {
    Feed: {
      screen: FeedScreen
    },
    Search: {
      screen: SearchScreen
    },
    Camera: {
      screen: CameraScreen
    },
    Likes: {
      screen: LikesScreen
    },
    Profil: {
      screen: ProfilScreen
    }
  },
  {
    // Routes.js
    tabBarComponent: (props) => (
      <>
        <TabBar {...props} />
        <SafeAreaView />
      </>
    )
  }
);

export default createAppContainer(bottomTabBar);
