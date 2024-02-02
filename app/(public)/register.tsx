import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import { registerStyles } from '~/app/(public)/styles'
import IllustrationRegister from 'assets/register-illustration.svg'
import Input from '~/components/custom-textinputs'
import { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { useTranslation } from 'react-i18next'
import { Link } from 'expo-router'

export default function Register() {
  const [form, setForm] = useState({ name: '', username: '', email: '', password: '' })

  const { t } = useTranslation('', {
    keyPrefix: 'pages.register',
  })
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={registerStyles.container}>
        <View style={registerStyles.imgRegister}>
          <IllustrationRegister width="100%" height="100%" />
        </View>
        <View style={registerStyles.formContainer}>
          <Input
            onChangeText={(text) => {
              setForm({ ...form, name: text })
            }}
            value={form.name}
            label={t('form.name_label')}
          />

          <Input
            onChangeText={(text) => {
              setForm({ ...form, username: text })
            }}
            value={form.username}
            label={t('form.username_label')}
          />

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
            textContentType="emailAddress"
          />
        </View>

        <TouchableOpacity onPress={() => {}}>
          <View style={registerStyles.buttonRegister}>
            <Text style={registerStyles.submitText}>{t('form.register')}</Text>
            <Feather style={registerStyles.arrowIcon} name="arrow-right" size={24} />
          </View>
        </TouchableOpacity>

        <View style={registerStyles.registerBox}>
          <Text style={registerStyles.haveAccountText}>{t('form.have_account')}</Text>
          <Link push href="/register">
            <Text style={registerStyles.loginText}>{t('form.login')}</Text>
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
