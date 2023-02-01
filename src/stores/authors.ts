import { defineStore } from 'pinia';
import { ref, computed } from 'vue'

export const useAuthorsList = defineStore('authorList',() => {
    const authors = ref([])

    async function fetchAuthors () {
        fetch('https://mocki.io/v1/ee9fa656-9459-4bb6-92b6-f5bc008ab36c')
        .then(async response => {
            const dataResponse = await response.json();
            return dataResponse;
        })
        .then(data => authors.value = data);
    }

    function getOwnPost(authorId:number) {
        return authors.value.find((authorItem:any) => authorItem.id === authorId);
    }

    const getAuthorsList = computed(() => fetchAuthors());

    return { authors, getAuthorsList, getOwnPost }
})