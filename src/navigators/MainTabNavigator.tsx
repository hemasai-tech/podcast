import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeatherIcon from 'react-native-vector-icons/Feather';

import ListenNowScreen from '../components/listenNow/ListenNowScreen';
import SearchScreen from '../components/search/SearchScreen';
import LibraryScreen from '../components/library/LibraryScreen';
import PodcastDetailsScreen from '../components/podcastDetails/PodcastDetailsScreen';
import { theme } from '../constants/theme';

const MainTab = createBottomTabNavigator();

const ListenNowStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const LibraryStack = createNativeStackNavigator();

const ICON_SIZE = 24;

const ListenNowStackScreen = () => {
  return (
    <ListenNowStack.Navigator>
      <ListenNowStack.Screen name='ListenNowScreen' component={ListenNowScreen} options={{ title: 'Listen Now', headerTitleAlign: 'center' }} />
    </ListenNowStack.Navigator>
  )
}
const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator
     screenOptions={{
      headerTintColor: theme.color.blueLight,
      headerTitleStyle: {
        color: theme.color.black,
      },
    }}>
      <SearchStack.Screen name='SearchScreen' component={SearchScreen} options={{ title: 'Search', headerTitleAlign: 'center' }} />
      <SearchStack.Screen name='PodcastDetails' component={PodcastDetailsScreen} options={{ title: 'Search', headerTitleAlign: 'center' }} />
    </SearchStack.Navigator>
  )
}
const LibraryStackScreen = () => {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen name='LibraryScreen' component={LibraryScreen} options={{ title: 'Library', headerTitleAlign: 'center' }} />
    </LibraryStack.Navigator>
  )
}

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
    screenOptions={{
      tabBarActiveTintColor: theme.color.blueLight,
    }}
    >
      <MainTab.Screen name="ListenNow"  component={ListenNowStackScreen} options={{ 
        headerShown: false,
        tabBarIcon: (props) => (
            <FeatherIcon
              color={props.color}
              size={ICON_SIZE}
              name="headphones"
            />
          ), }} />
      <MainTab.Screen name="Search" component={SearchStackScreen} options={{ 
        headerShown: false , 
        tabBarIcon: (props) => (
            <FeatherIcon color={props.color} size={ICON_SIZE} name="search" />
          ),}} />
      <MainTab.Screen name="Library" component={LibraryStackScreen} options={{ headerShown: false,  
      tabBarIcon: (props) => (
            <FeatherIcon color={props.color} size={ICON_SIZE} name="inbox" />
          ), }} />
    </MainTab.Navigator>
  )
}

export default MainTabNavigator