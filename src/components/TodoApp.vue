<script setup lang="ts">
    import TodoForm from '../components/TodoForm.vue';
    import TodoList from '../components/TodoList.vue';
    import { useTodoListStore } from '../stores/todoList';
    import { storeToRefs } from 'pinia';

    const store = useTodoListStore();

    function directPatch () {
        store.$patch((state) => {
            state.userList.push({ name: 'Shoes', age: 25 })
        })
    }
</script>

<template>
    <div class="todo-app">
        <h1>To Do List</h1>
        <TodoForm />
        <TodoList />
        <button @click="directPatch()">Direct patch</button>
        <button @click="store.$reset()">Reset</button>
    </div>
</template>