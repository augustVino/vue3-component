<script setup lang="ts">
import { reactive, ref } from 'vue'

const state = reactive({ username: 'vino', password: '' })
const handleClick = () => {
  state.username = 'helloWorld'
}
</script>

<template>
  <div>{{ state.username }}-{{ state.password }}</div>

  <v-button
    a="1"
    b="2"
    size="medium"
    :round="true"
    type="primary"
    @click="handleClick"
    >按钮</v-button
  >
</template>
