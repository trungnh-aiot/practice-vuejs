<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  name: string
  class?: string
}>()

const icon = computed(() => defineAsyncComponent(() => import(`@/assets/svg/${props.name}.svg`)))
</script>

<template>
  <component :is="icon" :class="cn(props.class)" />
</template>
