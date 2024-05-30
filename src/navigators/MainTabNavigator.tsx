import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';

import ListenNowScreen from '../components/listenNow/ListenNowScreen';
import SearchScreen from '../components/search/SearchScreen';
import PodcastDetailsScreen from '../components/podcastDetails/PodcastDetailsScreen';
import { theme } from '../constants/theme';
import MiniPlayer from '../components/miniPlayer/MiniPlayer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EpisodeDetailsScreen from '../components/episodeDetails/EpisodeDetails';
import LibraryScreen from '../components/library/LibraryScreen';

const ListenNowStack = createNativeStackNavigator();

const ListenNowStackNavigator = () => {
  return (
    <ListenNowStack.Navigator>
      <ListenNowStack.Screen name='ListenNowScreen' component={ListenNowScreen} options={{ title: 'Listen Now', headerTitleAlign: 'center' }} />
    </ListenNowStack.Navigator>
  );
};

const SearchStack = createNativeStackNavigator();

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerTintColor: theme.color.blueLight,
        headerTitleStyle: {
          color: theme.color.black,
        },
        headerBackTitle: 'Back',
      }}>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen
        name="PodcastDetails"
        component={PodcastDetailsScreen}
        options={{ headerTitle: '' }}
      />
      <SearchStack.Screen
        name="EpisodeDetails"
        component={EpisodeDetailsScreen}
        options={{ headerTitle: '' }}
      />
    </SearchStack.Navigator>
  );
};

const LibraryStack = createNativeStackNavigator();

const LibraryStackNavigator = () => {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen name='LibraryScreen' component={LibraryScreen} options={{ title: 'Library', headerTitleAlign: 'center' }} />
    </LibraryStack.Navigator>
  );
};

const ICON_SIZE = 24;

const MainTab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      tabBar={(tabsProps) => (
        <>
          <MiniPlayer />
          <BottomTabBar {...tabsProps} />
        </>
      )}
      screenOptions={{
        tabBarActiveTintColor: theme.color.blueLight,
      }}>
      <MainTab.Screen
        name="ListenNow"
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <FeatherIcon
              color={props.color}
              size={ICON_SIZE}
              name="headphones"
            />
          ),
        }}
        component={ListenNowStackNavigator}
      />
      <MainTab.Screen
        name="Library"
        component={LibraryStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <FeatherIcon color={props.color} size={ICON_SIZE} name="inbox" />
          ),
        }}
      />
      <MainTab.Screen
        name="SearchStack"
        component={SearchStackNavigator}
        options={{
          title : 'Search',
          headerShown: false,
          tabBarIcon: (props) => (
            <FeatherIcon color={props.color} size={ICON_SIZE} name="search" />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;