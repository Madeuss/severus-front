import { AxiosError } from 'axios'
import severusApi from '~/services/api'

export interface LoginForm {
  email: string
  password: string
}

interface LoginResponse {
  response?: { access_token: string }
  hasError?: boolean
  statusCode?: number
}

const login = async (form: LoginForm): Promise<LoginResponse> => {
  try {
    const response = await severusApi.post('/login', form)

    // Handle the successful login data
    return { response: response.data }
  } catch (err) {
    const error = err as AxiosError<{ statusCode: number }>

    return {
      hasError: true,
      statusCode: error.response?.data.statusCode,
    }
  }
}

export default login
