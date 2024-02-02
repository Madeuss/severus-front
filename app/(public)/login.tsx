import { Feather } from '@expo/vector-icons'
import LoginIllustration from 'assets/login-illustration.svg'
import { useState } from 'react'
import { KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'
import colors from '~/colors'

import Input from '~/components/custom-textinputs'
import ForgotPasswordLink from '~/app/(public)/forgot-password-link'
import { useTranslation } from 'react-i18next'
import login from '~/services/login'
import { Link, router } from 'expo-router'
import useStorage from '~/hooks/useStorage'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [formInvalid, setFormInvalid] = useState(false)
  const { t } = useTranslation('', {
    keyPrefix: 'pages.login',
  })
  const storage = useStorage()

  const submitLogin = async () => {
    setIsLoading(true)

    const { statusCode, response } = await login(form)

    if (response) {
      storage.saveItem('accessToken', response.access_token)
      router.push('/(auth)/')
    }

    if (statusCode === 401) setFormInvalid(true)
    setIsLoading(false)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.loginContainer}>
        <LoginIllustration width="100%" />

        <View style={styles.form}>
          <View>
            <Text style={styles.baseText}>{t('title')}</Text>
            <Text style={styles.subtitle}>{t('subtitle')}</Text>
          </View>

          <View style={styles.inputsArea}>
            <Input
              onChangeText={(text) => {
                setForm({ ...form, email: text })
              }}
              value={form.email}
              label={t('form.email_label')}
              textContentType="emailAddress"
            />

            <Input
              onChangeText={(text) => {
                setForm({ ...form, password: text })
              }}
              value={form.password}
              label={t('form.password_label')}
              secureTextEntry
            />
          </View>
        </View>
        <View style={styles.forgetPwd}>
          <ForgotPasswordLink />
        </View>

        <TouchableOpacity onPress={submitLogin}>
          <View style={styles.signInButton}>
            <Text style={styles.submitText}>{t('form.sign_in')}</Text>
            <Feather
              name="arrow-right"
              size={24}
              color={colors.neutral[100]}
              style={styles.arrowIcon}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.registerBox}>
          <Text style={styles.noAccountText}>{t('form.no_account')}</Text>
          <Link push href="/register">
            <Text style={styles.registerText}>{t('form.register')}</Text>
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
