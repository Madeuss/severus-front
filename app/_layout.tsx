import { useFonts } from 'expo-font'
import { Slot, useRouter, useSegments } from 'expo-router'
import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Text } from 'react-native'
import i18n from '~/utils/i18n'

// const CLERK_PUBLISHABLE_KEY = 'pk_test_dG91Y2hpbmctYmVkYnVnLTQ0LmNsZXJrLmFjY291bnRzLmRldiQ'

const InitialLayout = () => {
  const isLoaded = true
  const isSignedIn = false
  const segments = useSegments()
  const router = useRouter()

  useEffect(() => {
    if (!isLoaded) return

    const inTabsGroup = segments[0] === '(tabs)'

    if (isSignedIn && !inTabsGroup) {
      router.replace('/home')
    } else if (!isSignedIn) {
      router.replace('/login')
    }
  }, [isSignedIn])

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
