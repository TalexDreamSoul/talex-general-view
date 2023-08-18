<script setup lang="ts">
import { orderForm } from '~/composables/order-form'

defineOptions({
  name: 'IndexPage',
})
const wholeFormObj = reactive({})
const { t } = useI18n()
const labelCol = { style: { width: '150px' } }
const wrapperCol = { span: 14 }
</script>

<template>
  <a-form :label-col="labelCol" :wrapper-col="wrapperCol" layout="horizontal" style="max-width: 600px">
    <dynamic-form-item :form="wholeFormObj" :obj="orderForm" />
  </a-form>
</template>

<route lang="yaml">
meta:
  # Quick to book order
  transKey: index
  layout: home
</route>
