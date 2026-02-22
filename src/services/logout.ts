import { AxiosError } from 'axios'
import severusApi from '@/services/api'

interface LoginResponse {
  response?: string
  hasError?: boolean
  statusCode?: number
}

const logout = async (accessToken: string): Promise<LoginResponse> => {
  try {
    const response = await severusApi.post('/logout', accessToken)

    return { response: response.data }
  } catch (err) {
    const error = err as AxiosError<{ statusCode: number }>

    return {
      hasError: true,
      statusCode: error.response?.data.statusCode,
    }
  }
}

export default logout
