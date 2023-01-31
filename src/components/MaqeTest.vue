<script setup lang="ts">
const ForumItem = () => import('../components/ForumItem.vue');
</script>

<template>
    <div class="container">
        <h1>Maqe Forum</h1>
        <p>Your current timezone is: Asia/Bangkok</p>
        <ForumItem />
    </div>
</template>

<style scoped>
.container {
    width: 70%;
}
</style>