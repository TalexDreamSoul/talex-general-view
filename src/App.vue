<script setup lang="ts">
import { theme } from 'ant-design-vue'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'TalexOrder',
  meta: [
    { name: 'description', content: 'Talex 的团队定制网站' },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#21A3F1' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})
</script>

<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#21A3F1',
      },
      algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    }"
  >
    <RouterView />
  </a-config-provider>
</template>
