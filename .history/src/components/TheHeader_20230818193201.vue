<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const title = computed(() => route?.meta?.title )
</script>

<template>
  <header sticky display-flex h-6em items-center justify-between bg-gray-200 px-8 py-2 dark:bg-trueGray-900>
    <Logo />

    <div v-if="title" class="Head-Title">
      <span text="~ 1.5em">{{ title }}</span>
    </div>

    <div flex class="Head-Personal">
      <p mr-4 text="~ 1.5em" />
      <div class="Head-Func">
        <a-space>

          <a-button type="text" icon-btn :title="t('button.toggle_dark')" @click="toggleDark()">
            <div i="carbon-sun dark:carbon-moon" />
          </a-button>
        </a-space>
      </div>
    </div>
  </header>
</template>
