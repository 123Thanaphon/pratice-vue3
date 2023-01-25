<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import globalMixin from "./mixin/globalMixin";

import {
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeUpdate,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTriggered,
  onRenderTracked,
  onActivated,
  onDeactivated,
  onServerPrefetch,
  computed
} from "vue";

export default {
  components: {
    HelloWorld,
  },
  mixins: [globalMixin],
  setup() {
    const count = ref(3);
    const view = true;
    const dogPhoto = {};

    const getDogPhoto = () => {
      return "202";
    };

    const publishedBooksMessage = computed(() => {
      return count.value * 2;
    });

    onBeforeUnmount(() => {
      console.log("onBeforeUnmount !!");
    });

    onUnmounted(() => {
      console.log("onUnmounted !!");
    });
    
    onMounted(() => {
      console.log("onMounted !!");
      getDogPhoto();
    });

    onBeforeUpdate(() => {
      console.log("onBeforeUpdate !!");
    });

    onUpdated(() => {
      console.log("onUpdated !!");

        // text content should be the same as current `count.value`
        console.log(document.getElementById('count')?.textContent);
    });

    onRenderTriggered(() => {
      console.log("onRenderTriggered !!");
    });

    // When DOM has chenged, Not called during server-side rendering
    onRenderTracked(() => {
      console.log("onRenderTracked !!");
    });

    // TODO: POC
    onErrorCaptured(() => {
      console.log("onErrorCaptured !!");
    });

    onActivated(() => {
      console.log("onActivated !!");
    });

    onDeactivated(() => {
      console.log("onDeactivated !!");
    });

    onServerPrefetch(() => {
      console.log("onServerPrefetch !!");
    });

    return {
      count,
      view,
      dogPhoto,
      getDogPhoto,
      publishedBooksMessage
    }
  }
}
</script>

<template>
  <div>
      {{ publishedBooksMessage }}
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
