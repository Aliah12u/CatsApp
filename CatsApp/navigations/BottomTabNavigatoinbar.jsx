import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home,Profile,Search } from '../screens';
import {Ionicons} from "@expo/vector-icons";
import {COLORS} from '../constants/index';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Tab = createBottomTabNavigator()
const screenOptions = {
    tabBarShowLabel:false,
    tabBarHideOnKeyboard:true,
    headerShown: false,
    tabBarStyle: {
        position:'absolute',
        right:0,
        left:0,
        bottom:0,
        elevation:0,
        height:70
    }
}

const BottomTabNavigatoinbar = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name='Home' component={Home} options={{
          tabBarIcon:({focused}) => {
            return <Ionicons name={focused?'home':'home-outline'} 
            size={24}
            color={focused?COLORS.primary:COLORS.gray}/>
          }
        }} /> 
        <Tab.Screen name='Search' component={Search} options={{
          tabBarIcon:({focused}) => {
            return <Ionicons name={'search-sharp'} 
            size={24}
            color={focused?COLORS.primary:COLORS.gray}/>
          }
        }}/> 
        <Tab.Screen name='Porfile' component={Profile} options={{
          tabBarIcon:({focused}) => {
            return <Ionicons name={focused?'create':'create-outline'} 
            size={24}
            color={focused?COLORS.primary:COLORS.gray}/>
          }
        }}/> 
    </Tab.Navigator>
  )
}

export default BottomTabNavigatoinbar