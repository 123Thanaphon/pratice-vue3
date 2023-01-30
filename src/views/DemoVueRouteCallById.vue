<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
const route = useRoute();
const queryParam = route.query.name;

onMounted(() => {
  console.log(queryParam);
  console.log(route.params.testid);
})
</script>

<template>
  <div>
    <h1>Demo View Router</h1>
    Param: {{ route.params.testid }}
    <img src="https://sites.google.com/a/pm.ac.th/doraemon-5-7-3/_/rsrc/1511855999998/-character/doraemon/doraemon.jpg?height=400&width=336" alt="">
  </div>
</template>
<style>
    img {
        height: 100px;
        width: 100px;
        object-fit: contain;
    }
</style>