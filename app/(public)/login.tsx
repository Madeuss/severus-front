import { Feather } from '@expo/vector-icons'
import LoginIllustration from 'assets/login-illustration.svg'
import { useState } from 'react'
import { KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'
import colors from '~/colors'

import Input from '~/components/custom-textinputs'
import ForgotPasswordLink from '~/app/(public)/forgot-password-link'
import { useTranslation } from 'react-i18next'
import { Link } from 'expo-router'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const { t } = useTranslation('', {
    keyPrefix: 'pages.login',
  })

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

        <TouchableOpacity onPress={() => {}}>
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
