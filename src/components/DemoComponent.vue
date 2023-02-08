<script setup lang="ts">
import { createWebHistory } from 'vue-router';
console.log(createWebHistory(import.meta.env.BASE_URL))

</script>
<template>
    <div>
        DemoComponent
        <router-view></router-view>
    </div>
</template>