<script setup lang="ts">
import { ref } from 'vue'
const BaseBlack = () => import('../components/BaseBlack.vue')
const BaseRed = () => import('../components/BaseRed.vue')

const currentComponent = ref(BaseBlack);
const href = false;
</script>
<template>
  <div class="about">
    <button @click="currentComponent = BaseRed">Switch component</button>
    <component :is="currentComponent"></component>
    <component :is="href ? 'a' : 'span'">Link</component>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
