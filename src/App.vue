<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onErrorCaptured, onServerPrefetch, onMounted} from 'vue';

import TodoApp from './components/TodoApp.vue';
import AddUserForm from './components/AddUserForm.vue';
</script>

<template>
  <!-- <TodoApp/> -->
  <AddUserForm />
</template>

<style scoped>
</style>
