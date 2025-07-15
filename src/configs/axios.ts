import { ENV } from '@/constants/env.constant'
import axios from 'axios'

const request = axios.create({
  baseURL: ENV.BACK_END_API,
  timeout: ENV.API_TIME_OUT,
})

export default request
