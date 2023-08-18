<script setup lang="ts">
import type { FormSubObj } from '~/composables/order-form'

defineOptions({
  name: 'DynamicFormItem',
})

const props = defineProps<{
  form: object
  obj: FormSubObj
}>()

const { t } = useI18n()

const model = ref(props.obj?.defaultValue || '')
const nextObj = computed(() => props.obj.next?.({
  ...props.form,
  type: model.value,
}) || null)

const placeholder = computed(() => props.obj.placeholder ? t(`Form.${props.obj.placeholder}`) : '')

watch(
  () => props.obj.defaultValue,
  (value) => {
    model.value = value
  },
  { immediate: true },
)

watch(
  () => model.value,
  (value) => {
    Object.assign(props.form, {
      [props.obj.labelKey]: value,
    })
  },
  { immediate: true },
)
</script>

<template>
  <a-form-item
    :label="t(`Form.${obj.labelKey}`)"
    :name="obj.labelKey"
  >
    <a-select v-if="obj.type === 'select'" v-model:value="model" :placeholder="placeholder">
      <a-select-option
        v-for="option in obj.options"
        :key="option"
        :value="option"
      >
        {{ option }}
      </a-select-option>
    </a-select>
    <a-input v-else-if="obj.type === 'input'" v-model:value="model" :placeholder="placeholder" />
  </a-form-item>
  <dynamic-form-item v-if="nextObj" :form="form" :obj="nextObj" />
</template>
