<script setup lang="ts">
import { computed, ref } from 'vue';
import BaseButton from './components/BaseButton.vue';
import BaseDisplay from './components/BaseDisplay.vue';

const testProp = 'Click to active';
const isActive = ref(false);
const countClickNumber = ref(0);

const checkActiveBox = computed(() => {
  return countClickNumber.value;
});

let historys = ref([0]);
const displayHistoryList = (clickNumber:number) => {
  countClickNumber.value = countClickNumber.value + clickNumber;
};
</script>

<template>
  <div>
    <BaseButton :text="testProp" @click="isActive = !isActive" />
    <BaseDisplay :isActive="isActive"/>

    Display: {{ checkActiveBox }}
    Display history list

    <BaseButton text="1" @click="displayHistoryList(1)"/>
    <BaseButton text="2" @click="displayHistoryList(2)"/>
    <BaseDisplay :isActive="checkActiveBox >= 5 ? true : false"/>
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
