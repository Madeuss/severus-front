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

export function RegisterScreen() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })

  const navigate = useNavigation()

  const goToLogin = () => {
    navigate.navigate('Login')
  }

  const handleRegister = async () => {
    console.log(form)
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
              secureTextEntry
              value={form.password}
              onChangeText={(value) => setForm({ ...form, password: value })}
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
