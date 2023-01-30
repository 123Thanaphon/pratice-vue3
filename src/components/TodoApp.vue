<script setup lang="ts">
    import TodoForm from '../components/TodoForm.vue';
    import TodoList from '../components/TodoList.vue';
    import { useTodoListStore } from '../stores/todoList';
    import { storeToRefs } from 'pinia';

    const store = useTodoListStore();
</script>

<template>
    <div class="todo-app">
        <h1>To Do List</h1>
        <TodoForm />
        <TodoList />
        <button @click="store.addTodo('ABCDEFG')">direct patch</button>
    </div>
</template>