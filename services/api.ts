import { SEVERUS_SERVER_API_ADDRESS } from '@env'
console.log('SEVERUS_SERVER_API_ADDRESS:', SEVERUS_SERVER_API_ADDRESS)

import axios from 'axios'

const severusConfig = {
  baseURL: SEVERUS_SERVER_API_ADDRESS,
}

const severusApi = axios.create(severusConfig)

export default severusApi
