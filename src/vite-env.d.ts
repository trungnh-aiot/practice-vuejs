/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_ENDPOINT: string
  readonly VITE_API_TIME_OUT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
