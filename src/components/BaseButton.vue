<script lang="ts">
export default {
  props: {
     text: {
        type: String,
        default: 'No text passed',
     },
  },
}
</script>

<template>
    <button>{{ text }}</button>
</template>