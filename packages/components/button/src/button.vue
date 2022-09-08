<template>
  <button
    :class="[
      bem.b(),
      bem.m(type),
      bem.m(size),
      bem.is('round', round),
      bem.is('loading', loading),
      bem.is('disabled', disabled)
    ]"
    :type="nativeType"
    :disabled="disabled || loading"
    @click="emitClick"
    @mousedown="emitMousedown"
  >
    <template v-if="iconPlacement === 'left'">
      <v-icon>
        <LoadingComponent v-if="loading"></LoadingComponent>
        <template v-else-if="slots.icon">
          <Component :is="slots.icon"></Component>
        </template>
      </v-icon>
    </template>
    <slot> </slot>
    <template v-if="iconPlacement === 'right'">
      <v-icon>
        <LoadingComponent v-if="loading"></LoadingComponent>
        <template v-else-if="slots.icon">
          <Component :is="slots.icon"></Component>
        </template>
      </v-icon>
    </template>
  </button>
</template>

<script lang="ts" setup>
import LoadingComponent from '@vino/components/internal-icon/Loading'
import { createNamespace } from '@vino/utils/create'
import { buttonEmits, buttonProps } from './button'
import VIcon from '@vino/components/icon'
import { useSlots } from 'vue'

const bem = createNamespace('button') // v-button
defineOptions({
  name: 'v-button',
  inheritAttrs: false
})
const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
const slots = useSlots()

const emitClick = (e: MouseEvent) => {
  emit('click', e)
}
const emitMousedown = (e: MouseEvent) => {
  emit('mousedown', e)
}
</script>
