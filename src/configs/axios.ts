import { ENV } from '@/constants/env.constant'
import axios from 'axios'

const request = axios.create({
  baseURL: ENV.BACK_END_API,
  timeout: 10000,
})

export default request
