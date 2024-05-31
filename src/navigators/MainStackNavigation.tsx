import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabNavigator';
import PlayerScreen from '../components/player/PlayerScreen';
import QueueScreen from '../components/queue/QueueScreen';

const MainStack = createNativeStackNavigator();

const MainStackNavigation = () => {
  return (
    <MainStack.Navigator screenOptions={{
      presentation:'modal'
    }}>
      <MainStack.Screen name='Tabs' component={MainTabNavigator} options={{ headerShown: false }} />
      <MainStack.Screen name='Player' component={PlayerScreen} options={{ headerShown: false }} />
      <MainStack.Screen name="Queue" component={QueueScreen} options={{ headerShown: false }} />
    </MainStack.Navigator>
  )
}

export default MainStackNavigation