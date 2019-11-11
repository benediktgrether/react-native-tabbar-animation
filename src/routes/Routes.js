import * as React from 'react';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import FeedScreen from '../screen/FeedScreen';
import SearchScreen from '../screen/SearchScreen';
import ProfilScreen from '../screen/ProfilScreen';
import CameraScreen from '../screen/CameraScreen';
import LikesScreen from '../screen/LikesScreen';
// import TabBar from "../components/TabBarTesting";

// import TabBar from "./../strokeAnimation/components/TabBar";
// import TabBar from "./../sliderWithLabel/components/TabBar";

// import TabBar from '../circlesAndSpinning/components/TabBar';

import TabBar from '../bottomSlideAnimation/components/TabBar';

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
    // eslint-disable-next-line react/jsx-props-no-spreading
    tabBarComponent: (props) => <TabBar {...props} />
  }
);

export default createAppContainer(bottomTabBar);
