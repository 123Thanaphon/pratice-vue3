import { defineStore } from 'pinia';
import { ref, computed } from 'vue'
import type { AuthorInfo } from '../types/author'

export const useAuthorsList = defineStore('authorList', () => {
    const authors = ref<AuthorInfo[]>([]);

    async function fetchAuthors() {
        try {
            const response = await fetch('https://mocki.io/v1/ee9fa656-9459-4bb6-92b6-f5bc008ab36c');
            const data = await response.json();
            return data;
        } catch(error) {
            throw new Error('Can not fetch authors data.');
        }
    }

    function setAuthorsList(data: AuthorInfo[]) {
        authors.value = data;
    }

    const getOwnPost = computed(() => {
        return (authorId:number) => authors.value.find((authorItem) => authorItem.id === authorId)
    });

    return { authors, fetchAuthors, getOwnPost, setAuthorsList }
})