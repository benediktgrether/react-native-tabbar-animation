import * as React from 'react';
import { SafeAreaView } from 'react-native';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import FeedScreen from '../components/Home';
import SearchScreen from '../components/Search';
import CameraScreen from '../components/AddPicture';
import LikesScreen from '../components/Notifications';
import ProfilScreen from '../components/Profil';

import TabBar from '../destructionPathScaleRotate/components/TabBar';

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
