import { defineStore, storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useAuthorsList } from '../stores/authors';
import type { PostsInfo } from '../types/post'

export const usePostsList = defineStore('postList', {
    state: () => {
        return {
            posts: [] as PostsInfo[],
            postById: null as PostsInfo | null
        }
    },

    actions: {
        async fetchPostList() {
            const response = await fetch('https://mocki.io/v1/6bf4674b-da24-4452-b52a-c2d33ba40ae8');
            const data = await response.json();
            return data;
        },
        setPostsList(data: PostsInfo[]) {
            this.posts = data;
        },
        setPostById(post: PostsInfo | null) {
            this.postById = post;
        }
    }
})