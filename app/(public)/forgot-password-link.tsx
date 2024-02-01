import { useNavigation } from 'expo-router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text, TouchableOpacity } from 'react-native'

import colors from '~/colors'

const ForgotPasswordLink = () => {
  const navigation = useNavigation()
  const { t } = useTranslation('', {
    keyPrefix: 'pages.login',
  })

  const handleForgotPasswordPress = () => {
    // Navigate to the Forgot Password screen or perform your desired action
    navigation.navigate('forgotPassword')
  }

  return (
    <TouchableOpacity onPress={handleForgotPasswordPress}>
      <Text style={{ color: colors.secondary.main, textDecorationLine: 'none' }}>
        {t('form.forgot_pwd')}
      </Text>
    </TouchableOpacity>
  )
}

export default ForgotPasswordLink
