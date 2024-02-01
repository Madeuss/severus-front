import { Feather } from '@expo/vector-icons'
import LoginIllustration from 'assets/login-illustration.svg'
import { useState } from 'react'
import { KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

import colors from '~/colors'
import Input from '~/components/custom-textinputs'
import ForgotPasswordLink from '~/components/forget-password-link'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.loginContainer}>
        <LoginIllustration width="100%" />

        <View style={styles.form}>
          <View>
            <Text style={styles.baseText}>Welcome back</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>
          </View>

          <View style={styles.inputsArea}>
            <Input
              onChangeText={(text) => {
                setForm({ ...form, email: text })
              }}
              value={form.email}
              mode="outlined"
              label="Email"
              textContentType="emailAddress"
            />

            <Input
              onChangeText={(text) => {
                setForm({ ...form, password: text })
              }}
              value={form.password}
              mode="outlined"
              label="Password"
              secureTextEntry
            />
          </View>
        </View>
        <View style={styles.forgetPwd}>
          <ForgotPasswordLink />
        </View>

        <TouchableOpacity onPress={() => {}}>
          <View style={styles.signInButton}>
            <Text style={styles.submitText}>Sign In</Text>
            <Feather
              name="arrow-right"
              size={24}
              color={colors.neutral[100]}
              style={styles.arrowIcon}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.registerBox}>
          <Text style={styles.noAccountText}>
            Don't have an account? <Text style={styles.registerText}>Register</Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
