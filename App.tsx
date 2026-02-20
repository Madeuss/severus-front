import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StatusBar } from 'expo-status-bar'

import { View, Text } from 'react-native'
import { LoginScreen } from '@/screens/auth/LoginScreen'

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
      <AuthStack.Screen name="Register" component={PlaceholderScreen} />
    </AuthStack.Navigator>
  )
}

// --- Fluxo Logado (Abas) ---
function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Feed" component={PlaceholderScreen} />
      <Tab.Screen name="Profile" component={PlaceholderScreen} />
    </Tab.Navigator>
  )
}

// --- Componente Placeholder (Só para o App rodar agora) ---
function PlaceholderScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <Text className="text-white font-bold">Severus Front Online! 🐍</Text>
    </View>
  )
}

// --- Componente Principal ---
export default function App() {
  // Simulação de estado de login (depois você buscará isso de um Contexto ou Storage)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          // Se estiver logado, mostra as Abas
          <Stack.Screen name="Main" component={MainTabs} />
        ) : (
          // Se não estiver, mostra o Login/Registro
          <Stack.Screen name="Auth" component={AuthRoutes} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
