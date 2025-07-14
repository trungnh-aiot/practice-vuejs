<script setup lang="ts">
import { useForm } from 'vee-validate'
import { h } from 'vue'

import { Mail, Lock } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

import { toast } from 'vue-sonner'
import { formSchema, SsoMethodType } from '@/features/login/type/form-type'
import InputField from '@/components/login/InputField.vue'
import SvgIcon from '@/components/common/svg-icon.vue'
import { Checkbox } from '@/components/ui/checkbox'

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})
const ssoMethods: SsoMethodType[] = [
  {
    id: 1,
    name: 'facebook',
    alt: 'facebook',
    text: 'Login with Facebook',
    handleSignIn: () => {},
  },
  {
    id: 2,
    name: 'google',
    alt: 'google',
    text: 'Login with Google',
    handleSignIn: () => {},
  },
]
const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: h(
      'pre',
      { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, JSON.stringify(values, null, 2)),
    ),
  })
})
const handleForgotPassword = () => {}
</script>

<template>
  <div class="flex flex-col w-full h-full">
    <div class="flex flex-col gap-2 mb-10">
      <span class="text-3xl font-extrabold">Login to KikuGo</span>
      <span class="text-xs font-medium">Welcome back, your Japanese journey continues!</span>
    </div>
    <div class="flex flex-col gap-4">
      <Button
        class="h-10 w-full"
        v-for="ssoMethod in ssoMethods"
        v-bind:key="ssoMethod.id"
        variant="outline"
        size="icon"
      >
        <SvgIcon :name="ssoMethod.name" class="h-full" />
        <p class="font-medium">{{ ssoMethod.text }}</p>
      </Button>
    </div>
    <div class="flex items-center gap-4 py-3">
      <div class="h-px flex-1 bg-border"></div>
      <span class="text-xs text-muted-foreground">Or continue with</span>
      <div class="h-px flex-1 bg-border"></div>
    </div>
    <form class="flex flex-col gap-3" @submit="onSubmit">
      <InputField name="email" placeholder="Email" :icon="Mail" class-name="bg-gray-100" />
      <InputField name="password" placeholder="Password" :icon="Lock" class-name="bg-gray-100" />
      <div class="flex justify-between">
        <div class="flex gap-2 items-center">
          <Checkbox id="rememberMe" />
          <label for="rememberMe" class="font-normal">Remember me</label>
        </div>
        <Button type="button" class="underline" variant="link" @click="handleForgotPassword"
          ><span class="underline">Forgot your password?</span></Button
        >
      </div>
      <Button type="submit" class="mt-3"> LOGIN </Button>
    </form>
    <div class="flex justify-center items-center mt-5">
      <span>Don't have an account?</span>
      <Button type="button" class="underline p-0 pl-1" variant="link" @click="handleForgotPassword"
        ><span class="underline">Register</span></Button
      >
    </div>
  </div>
</template>
