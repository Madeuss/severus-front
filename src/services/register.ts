import { AxiosError } from 'axios'
import severusApi from '@/services/api'

export interface RegisterForm {
  name: string
  email: string
  password: string
  username?: string
  avatar?: string
}

interface RegisterResponse {
  id: string
  name: string
  username: string
  email: string
  avatar: string
  createdAt: string
  updatedAt: string
}

interface RegisterServiceResponse {
  response?: RegisterResponse
  hasError?: boolean
  statusCode?: number
}

const register = async (
  form: RegisterForm,
): Promise<RegisterServiceResponse> => {
  try {
    const response = await severusApi.post('/user', form)

    return { response: response.data }
  } catch (err) {
    const error = err as AxiosError<{ statusCode: number }>

    return {
      hasError: true,
      statusCode: error.response?.data.statusCode,
    }
  }
}

export default register
