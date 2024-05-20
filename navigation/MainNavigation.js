
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import SplashScreen from '../src/SplashScreen';
import LoginScreen from '../src/LoginScreen';
import TabNavigation from './TabNavigation';

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={TabNavigation} />
    </Stack.Navigator>
  );
}

export default MainNavigation;
