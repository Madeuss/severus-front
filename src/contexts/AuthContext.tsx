import useStorage from '@/hooks/useStorage.ts'
import login, { LoginForm } from '@/services/login'
import React, { createContext, useState, useContext, useEffect } from 'react'

interface AuthContextData {
  isAuthenticated: boolean
  isLoading: boolean
  signIn: (credentials: LoginForm) => Promise<{ error?: string }>
  // signOut: () => Promise<{
  //   error?: string
  // }>
  signOut: () => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const storage = useStorage()

  useEffect(() => {
    async function loadStorageData() {
      const token = await storage.getItem('accessToken')
      if (token) setIsAuthenticated(true)
      setIsLoading(false)
    }
    loadStorageData()
  }, [])

  const signIn = async (credentials: LoginForm) => {
    const { response, statusCode } = await login(credentials)

    if (response?.access_token) {
      await storage.saveItem('accessToken', response.access_token)
      setIsAuthenticated(true)
      return {}
    }

    if (statusCode === 401) return { error: 'E-mail ou senha inválidos.' }
    return { error: 'Erro ao conectar com a torre de astronomia.' }
  }

  const signOut = async () => {
    // const currentAccessToken = await storage.getItem('accessToken')

    // if (!currentAccessToken) {
    //   setIsAuthenticated(false)
    //   return { error: 'Nenhum token de acesso encontrado.' }
    // }

    // const { response } = await logout(currentAccessToken)

    // if (response) {
    await storage.removeItem('accessToken')
    setIsAuthenticated(false)
    // return {}
    // }

    // return { error: 'Erro ao tentar sair do Severus' }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isLoading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
