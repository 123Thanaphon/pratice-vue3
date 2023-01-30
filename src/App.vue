<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onErrorCaptured, onServerPrefetch, onMounted} from 'vue';

import TodoApp from './components/TodoApp.vue';
</script>

<template>
  <TodoApp/>
</template>

<style scoped>
</style>
