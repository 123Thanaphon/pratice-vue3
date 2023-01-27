<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const BaseBlack = defineAsyncComponent(() =>
  import('../components/BaseBlack.vue')
);
</script>
<template>
<div class="about">
    <BaseBlack />
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
