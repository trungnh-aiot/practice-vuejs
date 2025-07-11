<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { h } from 'vue'
import * as z from 'zod'
import { Mail } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from 'vue-sonner'

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email(),
    password: z.string().min(2),
  }),
)

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
})

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
</script>

<template>
  <form class="w-2/3 flex flex-col gap-6" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="email" :validate-on-blur="!isFieldDirty">
      <FormItem>
        <FormControl>
          <div class="relative w-full max-w-sm items-center">
            <Input
              type="text"
              placeholder="Email"
              v-bind="componentField"
              class="pl-10 focus-visible:ring-0"
            />
            <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
              <Mail class="size-6 text-muted-foreground" />
            </span>
          </div>
        </FormControl>
        <div class="h-1"><FormMessage /></div>
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password" :validate-on-blur="!isFieldDirty">
      <FormItem>
        <FormControl>
          <div class="relative w-full max-w-sm items-center">
            <Input
              type="text"
              placeholder="Password"
              v-bind="componentField"
              class="pl-10 focus-visible:ring-0"
            />
            <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
              <Mail class="size-6 text-muted-foreground" />
            </span>
          </div>
        </FormControl>
        <div class="h-1"><FormMessage /></div>
      </FormItem>
    </FormField>
    <Button type="submit"> Submit </Button>
  </form>
</template>
