import axios from 'axios'

const severusConfig = {
  baseURL: process.env.SEVERUS_SERVER_API_ADDRESS,
}

const severusApi = axios.create(severusConfig)

export default severusApi
