import { defineStore } from 'pinia';
import { ref, computed } from 'vue'

interface AuthorInfo {
    id: number
    name: string
    avatar_url: string
}

export const useAuthorsList = defineStore('authorList', () => {

    const authors = ref([] as AuthorInfo[]);

    async function fetchAuthors() {
        const response = await fetch('https://mocki.io/v1/ee9fa656-9459-4bb6-92b6-f5bc008ab36c');
        const data = await response.json()
        return data;
    }

    async function setAuthorsList(data:object) {
       authors.value = data;
    }

    const getOwnPost = computed(() => {
        return (authorId:number) => authors.value.find((authorItem) => authorItem.id === authorId)
    });

    return { authors, fetchAuthors, getOwnPost, setAuthorsList }
})