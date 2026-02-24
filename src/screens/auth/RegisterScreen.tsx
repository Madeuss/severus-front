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
import { useNavigation } from '@react-navigation/native'
import register from '@/services/register'
import { EyeClosed, Eye } from 'lucide-react-native'

export function RegisterScreen() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigation()

  const goToLogin = () => {
    navigate.navigate('Login')
  }

  const handleRegister = async () => {
    try {
      const result = await register(form)

      if (result.hasError) {
        console.error('Registration failed:', result.statusCode)
        return
      }

      console.log('Registration successful:', result.response)
      navigate.navigate('Login')
    } catch (error) {
      console.error('Unexpected error:', error)
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
            <Text className="text-white text-2xl font-bold">
              The Book of Admittance 📖🪶
            </Text>
            <Text className="text-emerald-500 text-lg">
              Crie sua conta para continuar
            </Text>
          </View>

          <View className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800">
            <Input
              label="Nome"
              placeholder="Mr. Lovegood"
              keyboardType="default"
              autoCapitalize="words"
              value={form.name}
              onChangeText={(value) => setForm({ ...form, name: value })}
            />

            <Input
              label="E-mail"
              placeholder="seu@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={form.email}
              onChangeText={(value) => setForm({ ...form, email: value })}
            />

            <Input
              label="Senha"
              placeholder="••••••••"
              secureTextEntry={!showPassword}
              value={form.password}
              onChangeText={(value) => setForm({ ...form, password: value })}
              iconRight={showPassword ? Eye : EyeClosed}
              onPressIcon={() => setShowPassword(!showPassword)}
            />

            <Button title="Cadastrar" onPress={handleRegister} />
          </View>

          <View className="flex-row justify-center mt-8">
            <Text className="text-slate-400">Já possui uma conta? </Text>
            <TouchableOpacity onPress={goToLogin}>
              <Text className="text-emerald-500 font-bold">Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
