import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabNavigator';

const MainStack = createNativeStackNavigator();

const MainStackNavigation = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Tabs' component={MainTabNavigator} options={{ headerShown: false }} />
    </MainStack.Navigator>
  )
}

export default MainStackNavigation