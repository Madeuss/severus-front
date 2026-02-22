import useStorage from '@/hooks/useStorage.ts'
import React, { createContext, useState, useContext, useEffect } from 'react'

interface AuthContextData {
  isAuthenticated: boolean
  setUserAsAuthenticated: (token?: string) => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const storage = useStorage()

  const saveUserAccessToken = (token: string) => {
    storage.saveItem('accessToken', token)
  }

  const setUserAsAuthenticated = (token?: string) => {
    if (token) saveUserAccessToken(token)
    setIsAuthenticated(true)
  }

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = await storage.getItem('accessToken')
      if (token) setIsAuthenticated(true)
    }
    checkAuthentication()
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, setUserAsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
