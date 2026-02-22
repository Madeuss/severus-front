import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native'
import { Input, Button } from '@/components'
import { useAuth } from '@/contexts/AuthContext'
import { useNavigation } from '@react-navigation/native'

export function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()
  const navigate = useNavigation()

  const goToRegister = () => {
    navigate.navigate('Register')
  }

  const handleLogin = async () => {
    if (!email || !password) return

    const form = { email, password }

    const result = await signIn(form)

    if (result.error) {
      // TOAST ERROR
      console.log(result.error)
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-slate-950"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center p-6">
          <View className="mb-10">
            <Text className="text-white text-4xl font-bold">Severus 🐍</Text>
            <Text className="text-emerald-500 text-lg">
              Bem-vindo de volta, bruxo.
            </Text>
          </View>

          <View className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800">
            <Input
              label="E-mail"
              placeholder="seu@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <Input
              label="Senha"
              placeholder="••••••••"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity className="align-end mb-6">
              <Text className="text-emerald-500 text-right">
                Esqueceu a senha?
              </Text>
            </TouchableOpacity>

            <Button title="Entrar" onPress={handleLogin} />
          </View>

          <View className="flex-row justify-center mt-8">
            <Text className="text-slate-400">Não tem uma conta? </Text>
            <TouchableOpacity onPress={goToRegister}>
              <Text className="text-emerald-500 font-bold">Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
