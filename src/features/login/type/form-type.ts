import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

export const formSchema = toTypedSchema(
  z.object({
    email: z.string().email(),
    password: z.string().min(2),
  }),
)

export interface SsoMethodType {
  id: number
  name: string
  alt: string
  text: string
  handleSignIn: () => void
}
