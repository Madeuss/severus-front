// components/ForgotPasswordLink.js
import { useNavigation } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import colors from '~/colors'

const ForgotPasswordLink = () => {
  const navigation = useNavigation()

  const handleForgotPasswordPress = () => {
    // Navigate to the Forgot Password screen or perform your desired action
    navigation.navigate('ForgotPassword')
  }

  return (
    <TouchableOpacity onPress={handleForgotPasswordPress}>
      <Text style={{ color: colors.secondary.main, textDecorationLine: 'none' }}>
        Forgot Password?
      </Text>
    </TouchableOpacity>
  )
}

export default ForgotPasswordLink
