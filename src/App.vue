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
  onServerPrefetch
} from "vue";

export default {
  components: {
    HelloWorld,
  },
  mixins: [globalMixin],
  setup() {
    const count = ref(0);
    const view = true;
    const dogPhoto = {};

    const getDogPhoto = () => {
      console.log("getDogPhoto");
    };

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
      dogPhoto
    }
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <button id="count" v-if="view" @click="count++">Click to: + {{ count }}</button>
    </div>
  </header>
  <RouterView/>
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
