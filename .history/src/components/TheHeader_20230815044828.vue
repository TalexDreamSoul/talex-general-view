<script setup lang="ts">
import { useRoute } from 'vue-router'
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

const { t, locale } = useI18n()

const _locale = ref()

async function handleChange(l: string) {
  await loadLanguageAsync(l)

  locale.value = l
}

const title = ref('')
const route = useRoute()

onMounted(() => {
  _locale.value = locale.value

  const { meta }: { meta: any } = route
  const { transKey }: { transKey: string } = meta
  if (!transKey)
    return

  title.value = transKey
})
</script>

<template>
  <header sticky display-flex h-6em items-center justify-between bg-gray-200 px-8 py-2 dark:bg-trueGray-900>
    <Logo />

    <div v-if="title" class="Head-Title">
      <span text="~ 1.5em">{{ t(`Page.${title}.name`) }}</span>
    </div>

    <div flex class="Head-Personal">
      <p mr-4 text="~ 1.5em" />
      <div class="Head-Func">
        <a-space>
          <a-select v-model:value="_locale" style="width: 100px" @change="handleChange">
            <a-select-option v-for="option in availableLocales" :key="option" :value="option">
              {{ option }}
            </a-select-option>
            <template #suffixIcon>
              <div i-carbon-language />
            </template>
          </a-select>

          <a-button type="text" icon-btn :title="t('button.toggle_dark')" @click="toggleDark()">
            <div i="carbon-sun dark:carbon-moon" />
          </a-button>
        </a-space>
      </div>
    </div>
  </header>
</template>
