<script lang="ts">
export default {
  props: {
    isActive: {
        type: Boolean,
        default: false
    }
  }
}
</script>

<template>
    <div class="box" :class="{ 'is-active': isActive }">

    </div>
</template>

<style>
.box {
    height: 100px;
    width: 100px;
    margin: 10px;
}

.is-active {
    background-color: blue;
    color: white;
}
</style>