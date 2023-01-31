<script setup lang="ts">
    import { computed } from '@vue/runtime-core';
    import ForumItem from '../components/ForumItem.vue';

    const getCurrentTimeZone = computed(() => Intl.DateTimeFormat().resolvedOptions().timeZone);
</script>

<template>
    <div class="container">
        <h1>Maqe Forum</h1>
        <p>Your current timezone is: {{ getCurrentTimeZone }}</p>
        <ForumItem />
        <ForumItem />
    </div>
</template>

<style scoped>
.container {
    width: 70%;
    background-color: #EEEEEE;
}
</style>