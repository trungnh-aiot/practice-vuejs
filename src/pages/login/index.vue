<script setup lang="ts">
import LoginForm from '@/features/login/login-form.vue'
import OverviewComponent from '@/features/login/overview-component.vue'
</script>

<template>
  <div class="flex w-screen h-screen">
    <div class="w-1/2 flex flex-col items-center justify-start">
      <div class="w-full flex justify-between py-5 px-8 shadow-[0px_2px_0px_0px] shadow-gray-200">
        <img src="@/assets/logo1.png" class="h-20 w-20 rounded-4xl" />
      </div>

      <div class="flex-1 flex items-center justify-center w-full">
        <div class="w-full max-w-md">
          <login-form />
        </div>
      </div>
    </div>
    <div class="flex-1"><overview-component /></div>
  </div>
</template>

<style scoped></style>
