export interface EnvironmentVariables {
  BACK_END_API: string
  API_TIME_OUT: number
}

export const ENV: EnvironmentVariables = {
  BACK_END_API: import.meta.env.VITE_API_ENDPOINT || 'http://localhost:3001',
  API_TIME_OUT: parseInt(import.meta.VITE_API_TIME_OUT || '10000'),
}
