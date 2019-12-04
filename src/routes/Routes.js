import * as React from 'react';
import { SafeAreaView } from 'react-native';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

// import FeedScreen from '../screen/FeedScreen';
// import SearchScreen from '../screen/SearchScreen';
// import ProfilScreen from '../screen/ProfilScreen';
// import CameraScreen from '../screen/CameraScreen';
// import LikesScreen from '../screen/LikesScreen';

// Import Test Screens
import FeedScreen from '../components/Home';
import SearchScreen from '../components/Search';
import CameraScreen from '../components/AddPicture';
import LikesScreen from '../components/Notifications';
import ProfilScreen from '../components/Profil';
// import TabBar from './../sliderWithLabel/components/TabBar';

// import TabBar from './../strokeAnimation/components/TabBar';
// import TabBar from '../circlesAndSpinning/components/TabBar';
// import TabBar from '../bottomSlideAnimation/components/TabBar';
// import TabBar from '../movingUp/components/TabBar';
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
    // eslint-disable-next-line react/jsx-props-no-spreading
    tabBarComponent: (props) => (
      <>
        <TabBar {...props} />
        <SafeAreaView />
      </>
    )
  }
);

export default createAppContainer(bottomTabBar);
