<script setup lang="ts">
import {ref} from 'vue';
import { useTodoListStore } from '../stores/todoList';

const todo = ref('');
const store = useTodoListStore();
function addItemAndclearItem (item:any) {
    if (item.lenght === 0) {
        return;
    }

    store.addTodo(item);
    todo.value = '';
}
</script>

<template>
    <div>
        <form @submit.prevent="addItemAndclearItem(todo)">
            <input type="text" v-model="todo" >
            <button>Add</button>
        </form>
    </div>
</template>