import { useFonts } from 'expo-font'
import { Slot, useRouter, useSegments } from 'expo-router'
import { useLayoutEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Text } from 'react-native'
import useStorage from '~/hooks/useStorage'
import i18n from '~/utils/i18n'

const InitialLayout = () => {
  const storage = useStorage()
  const segments = useSegments()
  const router = useRouter()

  const redirectToCorrectRoute = async () => {
    const accessToken = await storage.getItem('accessToken')

    const inAuthArea = segments[0] === '(auth)'

    if (accessToken && !inAuthArea) {
      router.replace('/(auth)/feed')
    } else if (!accessToken) {
      router.replace('/login')
    }
  }

  useLayoutEffect(() => {
    redirectToCorrectRoute()
  }, [storage])

  return <Slot />
}

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('~/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('~/assets/fonts/Montserrat-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <I18nextProvider i18n={i18n}>
      <InitialLayout />
    </I18nextProvider>
  )
}

export default RootLayout
