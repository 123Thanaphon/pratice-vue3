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
            const response = await fetch('https://mocki.io/v1/6bf4674b-da24-4452-b52a-c2d33ba40ae8')
            const data = await response.json()
            return data;
        },
        setPostsList(data: PostsInfo[]) {
            this.posts = data;
        },
        setPostById(post: PostsInfo | null) {
            this.postById = post;
        }
    },

    getters: {
        featuredPosts: (state) => state.posts = [
            {
                id: 99,
                author_id: 99,
                title: 'By Tong Wolf',
                body: 'Lorem',
                image_url: 'https://static.wikia.nocookie.net/doraemon/images/b/b8/Doraemon_2005.PNG/revision/latest?cb=20220727180028&path-prefix=en',
                created_at: '2019-03-10T10:19:28Z',
            },
            ...state.posts
        ],
    },
  })