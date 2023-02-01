import { defineStore } from 'pinia';
import { ref, computed } from 'vue'

interface PostsInfo {
    id: number
    author_id: number
    title: string
    body: string
    image_url: string
    created_at: string
}

export const usePostsList = defineStore('postList', () => {
    const posts = ref([] as PostsInfo[])

    async function fetchPostList () {
        await fetch('https://mocki.io/v1/6bf4674b-da24-4452-b52a-c2d33ba40ae8')
        .then(response => response.json())
        .then(data => posts.value = data);
    }

    const getPostsList = computed(() => fetchPostList());

    return { posts, getPostsList }
  })