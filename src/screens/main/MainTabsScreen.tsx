import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'

export type MainTabParamList = {
  Feed: undefined
  Profile: undefined
}

const Tab = createBottomTabNavigator<MainTabParamList>()

function PlaceholderScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <Text className="text-white font-bold">HOME PAGE 🐍</Text>
    </View>
  )
}

export function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Feed" component={PlaceholderScreen} />
      <Tab.Screen name="Profile" component={PlaceholderScreen} />
    </Tab.Navigator>
  )
}
