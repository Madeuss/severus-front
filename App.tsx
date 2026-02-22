import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { LoginScreen } from '@/screens/auth/LoginScreen'
import { AuthProvider, useAuth } from '@/contexts/AuthContext'
import { MainTabs } from '@/screens/main/MainTabsScreen'
import { RegisterScreen } from '@/screens/auth/RegisterScreen'

export type RootStackParamList = {
  Auth: undefined
  Main: undefined
}

export type AuthStackParamList = {
  Login: undefined
  Register: undefined
}

export type MainTabParamList = {
  Feed: undefined
  Profile: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const AuthStack = createNativeStackNavigator<AuthStackParamList>()
const Tab = createBottomTabNavigator<MainTabParamList>()

// --- Fluxo Deslogado ---
function AuthRoutes() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  )
}

function RootNavigation() {
  const { isAuthenticated } = useAuth() // Pega o estado do contexto

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="Main" component={MainTabs} />
        ) : (
          <Stack.Screen name="Auth" component={AuthRoutes} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  )
}
