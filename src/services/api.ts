import { SEVERUS_SERVER_API_ADDRESS } from '@env'
import * as AxiosLogger from 'axios-logger'

import axios from 'axios'

const severusConfig = {
  baseURL: SEVERUS_SERVER_API_ADDRESS,
}

const severusApi = axios.create(severusConfig)

severusApi.interceptors.request.use(AxiosLogger.requestLogger)
severusApi.interceptors.response.use(AxiosLogger.responseLogger)

export default severusApi
