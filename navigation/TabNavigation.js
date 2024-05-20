import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../src/HomeScreen';
import Setting from '../src/Setting';
import Jos from '../src/Jos';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle:{
            height:60,
            padding:10
          },
          tabBarActiveTintColor: 'blue',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="home" size={size} color={color} />;
            },
            
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarLabel: 'Setting',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="cog" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Jos"
          component={Jos}
          options={{
            tabBarLabel: 'Jos',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="cog" size={size} color={color} />;
            },
          }}
        />
       
      </Tab.Navigator>
  );
}

export default TabNavigation;
