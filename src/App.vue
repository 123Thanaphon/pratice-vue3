<script lang="ts">
export default {
  data() {
    return {
      count: 1,
      name: 'Tong',
    }
  },
  computed: {
    computedPuseNumber() {
      return this.count + 1;
    },
  },
  methods: {
    methodsPlusNumber() {
      return this.computedPuseNumber + 5;
    },
    changeName() {
      this.name = "Thanaphon";
    },
  },
  watch: {
    name: {
      handler(val, oldVal) {
        console.log(oldVal + "Name updated to " + val);
      },
    }
  }
}
</script>

<template>
  <div>
    <p>
      computed: {{ computedPuseNumber }}
    </p>
    <p>
      methods: {{ methodsPlusNumber() }}
      Why when I use methods,I must use ()
    </p>
    <p>Name: {{ name }}</p>
    <button @click="changeName()">Click to change name</button>
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
