<script setup lang="ts">
    import { create } from "domain";
import { onActivated, onBeforeUnmount, onDeactivated, onErrorCaptured, onServerPrefetch, onUnmounted } from "vue";

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
</script>

<template>
  <h1>Test Mount Event</h1>
</template>

<style>

</style>