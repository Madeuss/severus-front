import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Button, Text, View } from 'react-native'
import { useAuth } from '@/contexts/AuthContext'

export type MainTabParamList = {
  Feed: undefined
  Profile: undefined
}

const Tab = createBottomTabNavigator<MainTabParamList>()

function PlaceholderScreen() {
  const { signOut } = useAuth()

  const handleLogout = async () => {
    signOut()

    // if (response.error) {
    //   // TOAST ERROR
    //   console.log(response.error)
    // }
  }

  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <Text className="text-white font-bold">HOME PAGE 🐍</Text>
      <Button color="red" title="Sair" onPress={handleLogout} />
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
