<script setup lang="ts">
import {ref} from 'vue';
import { useUserListStore } from '../stores/userList';
import { storeToRefs } from 'pinia';

const name = ref('');
const age = ref('');
const store = useUserListStore();
const { userList } = storeToRefs(store);

function addUserFunc (name:any, age:any) {
    if (name.lenght === 0 || age.lenght === 0) {
        return;
    }

    store.addUser(name, age);
}

function directPatch () {
    store.$patch((state) => {
        state.userList.push({ name: 'Shoes', age: 30 })

    });
}


</script>

<template>
    <div>
        <form @submit.prevent="addUserFunc(name,age)">
            <input type="text" v-model="name">
            <input type="text" v-model="age">
            <button>Add</button>
            <button type="button" @click="directPatch()">Direct patch</button>
        </form>

        <ul>
            <li v-for="(user, index) in userList" :key="index">
                Name: {{ user.name }} Age: {{ user.age }}

            </li>
        </ul>
    </div>
</template>