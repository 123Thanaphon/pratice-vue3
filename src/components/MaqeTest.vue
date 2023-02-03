<script setup lang="ts">
    import { onMounted } from 'vue';
    import ForumItem from '../components/ForumItem.vue';

    import { storeToRefs } from 'pinia';
    import { usePostsList } from '../stores/posts';
    import { useAuthorsList } from '../stores/authors';

    const getCurrentTimeZone:string = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const postsStore = usePostsList();
    const authorsStore = useAuthorsList();

    const { authors } = storeToRefs(authorsStore);
    const { posts } = storeToRefs(postsStore);
    const { fetchAuthors, setAuthorsList } = authorsStore;
    const { fetchPostList, setPostsList } = postsStore;

    onMounted(() => {
        const getPostsAndAuthors = async () => {
            const authorsData = await fetchAuthors();
            setAuthorsList(authorsData);

            const postsData = await fetchPostList();
            setPostsList(postsData);
        }

        getPostsAndAuthors();
    });
</script>

<template>
    <div class="container">
        <h1>Maqe Forum</h1>
        <p>Your current timezone is: {{ getCurrentTimeZone }}</p>
        <div v-if="posts.length > 0 && authors.length > 0">
            <RouterLink v-for="post in posts" :key="post.id" :to="{ name: 'postDetail', params: { postId: post.id }}">
                <ForumItem :post="post" :authors="authors" />
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 70%;
    background-color: #EEEEEE;
}

a:-webkit-any-link {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
}
</style>