<script setup lang="ts">
import { onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onErrorCaptured, onServerPrefetch, onMounted} from 'vue';
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount !!");
    });

    onUnmounted(() => {
      console.log("onUnmounted !!");
    });

    onActivated(() => {
      console.log("onActivated !!");
    });

    onDeactivated(() => {
      console.log("onDeactivated !!");
    });

    onErrorCaptured(() => {
      console.log("onErrorCaptured !!");
    });

    onServerPrefetch(() => {
      console.log("onServerPrefetch !!");
    });

    onMounted(() => {
      console.log("onMounted !!");
    });
</script>

<template>
  <div>
    <h1>Demo View Router</h1>
    <img src="https://cdn.pixabay.com/photo/2019/10/16/09/09/doraemon-4553920_1280.png" alt="">
  </div>
</template>
<style>
    img {
        height: 100px;
        width: 100px;
        object-fit: contain;
    }
</style>