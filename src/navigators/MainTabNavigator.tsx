import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListenNowScreen from '../components/listenNow/ListenNowScreen';
import SearchScreen from '../components/search/SearchScreen';
import LibraryScreen from '../components/library/LibraryScreen';

const MainTab = createBottomTabNavigator();

const ListenNowStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const LibraryStack = createNativeStackNavigator();

const ListenNowStackScreen = () => {
  return (
    <ListenNowStack.Navigator>
      <ListenNowStack.Screen name='ListenNowScreen' component={ListenNowScreen} options={{ title: 'Listen Now', headerTitleAlign: 'center' }} />
    </ListenNowStack.Navigator>
  )
}
const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name='SearchScreen' component={SearchScreen} options={{ title: 'Search', headerTitleAlign: 'center' }} />
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
    <MainTab.Navigator>
      <MainTab.Screen name="ListenNow" component={ListenNowStackScreen} options={{ headerShown: false }} />
      <MainTab.Screen name="Search" component={SearchStackScreen} options={{ headerShown: false }} />
      <MainTab.Screen name="Library" component={LibraryStackScreen} options={{ headerShown: false }} />
    </MainTab.Navigator>
  )
}

export default MainTabNavigator