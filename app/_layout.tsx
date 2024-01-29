import { Slot, useRouter, useSegments } from 'expo-router'
import { useEffect } from 'react'

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
  return (
    // <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
    <InitialLayout />
    // </ClerkProvider>
  )
}

export default RootLayout
