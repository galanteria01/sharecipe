import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Icon } from 'react-native-elements'
import Home from './Home'
import Profile from './Profile'
import Search from './Search'

const Tab = createBottomTabNavigator()

export default function Tabs() {
  return (
    <Tab.Navigator 
    screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: '#3EB489',
     }}
    >
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({color, size}) => ( <Icon type="ionicon" name="home" color={color} size={size} /> ) }} />
      <Tab.Screen name="Search" component={Search} options={{ tabBarIcon: ({color, size}) => ( <Icon type="ionicon" name="search" color={color} size={size} /> ) }} />
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: ({color, size}) => ( <Icon type="ionicon" name="person" color={color} size={size} /> ) }} />
    </Tab.Navigator>
  )
}
