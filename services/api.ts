import { SEVERUS_SERVER_API_ADDRESS } from '@env'

import axios from 'axios'

const severusConfig = {
  baseURL: SEVERUS_SERVER_API_ADDRESS,
}

const severusApi = axios.create(severusConfig)

export default severusApi
