<script setup lang="ts">
import { FunctionalComponent, toValue } from 'vue'
import { useField } from 'vee-validate'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const props = defineProps<{
  name: string
  icon: FunctionalComponent
  placeholder: string
  className?: string
}>()
const { value, handleBlur, handleChange, meta } = useField(props.name)
const componentField = {
  value: toValue(value),
  onInput: handleChange,
  onBlur: handleBlur,
}
</script>

<template>
  <FormField :v-slot="{ componentField }" :name="name" :validate-on-blur="!meta.dirty">
    <FormItem class="gap-1">
      <FormControl>
        <div class="relative w-full items-center">
          <Input
            type="text"
            :placeholder="placeholder"
            v-bind="componentField"
            :class="cn('pl-10 focus-visible:ring-0 rounded-4xl', className)"
          />
          <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
            <component :is="icon" class="size-6 text-muted-foreground" />
          </span>
        </div>
      </FormControl>
      <div class="h-1"><FormMessage class="text-xs" /></div>
    </FormItem>
  </FormField>
</template>
