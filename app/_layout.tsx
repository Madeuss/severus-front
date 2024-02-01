import { useFonts } from 'expo-font'
import { Slot, useRouter, useSegments } from 'expo-router'
import { useEffect } from 'react'
import { Text } from 'react-native'

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

// const tokenCache = {
//   async getToken(key: string) {
//     try {
//       return SecureStore.getItemAsync(key)
//     } catch (err) {
//       return null
//     }
//   },
//   async saveToken(key: string, value: string) {
//     try {
//       return SecureStore.setItemAsync(key, value)
//     } catch (err) {}
//   },
// }

const RootLayout = () => {
  // const [fontsLoaded, fontError] = useFonts({
  //   'Montserrat-Regular': require('~/assets/fonts/Montserrat-Regular.ttf'),
  // })
  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded || fontError) {
  //     await SplashScreen.hideAsync()
  //   }
  // }, [fontsLoaded, fontError])

  // if (!fontsLoaded && !fontError) {
  //   return
  // }

  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('~/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('~/assets/fonts/Montserrat-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    // <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
    // <View onLayout={onLayoutRootView}>
    <InitialLayout />
    // </View>
    // </ClerkProvider>
  )
}

export default RootLayout
