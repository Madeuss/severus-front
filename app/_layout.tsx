import { useFonts } from 'expo-font'
import { Slot, useRouter, useSegments } from 'expo-router'
import { useEffect, useState } from 'react' // Mudamos useLayoutEffect para useEffect
import { I18nextProvider } from 'react-i18next'
import { Text, View } from 'react-native'
import useStorage from '~/hooks/useStorage'
import i18n from '~/utils/i18n'

const InitialLayout = () => {
  const storage = useStorage()
  const segments = useSegments()
  const router = useRouter()
  const [isNavigationReady, setIsNavigationReady] = useState(false)

  const redirectToCorrectRoute = async () => {
    const accessToken = await storage.getItem('accessToken')
    const inAuthArea = segments[0] === '(auth)'

    // Se o token existe e não estamos no feed, vai pro feed
    if (accessToken && !inAuthArea) {
      router.replace('/(auth)/feed')
    }
    // Se não tem token e não estamos no login, vai pro login
    else if (!accessToken && segments[0] !== 'login') {
      router.replace('/login')
    }
  }

  useEffect(() => {
    setIsNavigationReady(true)
    redirectToCorrectRoute()
  }, [segments]) // Monitorar segmentos garante que o router saiba onde está

  // Enquanto a navegação não decide pra onde ir, mostramos um vazio seguro
  if (!isNavigationReady) return null

  return <Slot />
}

const RootLayout = () => {
  const [isClient, setIsClient] = useState(false)
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('~/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('~/assets/fonts/Montserrat-Bold.ttf'),
  })

  // 1. Resolve o erro de Hidratação: garante que o código rode só no cliente
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Enquanto as fontes não carregam ou o cliente não está pronto, mostramos Loading
  if (!fontsLoaded || !isClient) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <I18nextProvider i18n={i18n}>
      <InitialLayout />
    </I18nextProvider>
  )
}

export default RootLayout
