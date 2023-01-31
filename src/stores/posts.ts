import { defineStore } from 'pinia';
import { ref } from 'vue'

export const usePostsList = defineStore('postList', () => {
    const postList = ref([])

    async function getPosts() {
        const response = await fetch('https://mocki.io/v1/ee9fa656-9459-4bb6-92b6-f5bc008ab36c');
        return await response.json();
    }

    return { postList, getPosts }
  })