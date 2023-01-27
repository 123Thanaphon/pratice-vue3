<script setup lang="ts">
import { ref } from 'vue'
import BaseBlack from '../components/BaseBlack.vue';
import BaseRed from '../components/BaseRed.vue';

const currentComponent = ref(BaseBlack);
</script>
<template>
  <div class="about">
    <button @click="currentComponent = BaseRed">Switch component</button>
    <component :is="currentComponent"></component>
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
