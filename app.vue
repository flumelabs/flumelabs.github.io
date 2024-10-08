<template>
  <ConfigProvider :use-id="useIdFunction">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ConfigProvider>
</template>

<script setup lang="ts">
useHead({
  title: 'Flume Labs',
  bodyAttrs: {
    class: 'gradient-mesh grain-noise'
  },
})
import { ConfigProvider } from 'radix-vue'
const useIdFunction = () => useId()
</script>