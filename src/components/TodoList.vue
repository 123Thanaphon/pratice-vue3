<script setup lang="ts">
import { useTodoListStore } from '../stores/todoList';
import { storeToRefs } from 'pinia';
import { computed } from '@vue/runtime-core';

const store = useTodoListStore();
const { todoList } = storeToRefs(store);
const { toggleComplete, deleteTodo } = store;
</script>

<template>
    <div class="todo-list" v-for="(todo, index) in todoList" :key="todo.id<never>">
        <div class="content">
            <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
            <span @click.stop="toggleComplete(todo.id)">&#10004;</span>
            <span @click="deleteTodo(todo.id)" class="delete-btn">&#10060</span>
        </div>
    </div>
</template>

<style scoped>
    .completed {
        text-decoration: line-through;
    }
</style>