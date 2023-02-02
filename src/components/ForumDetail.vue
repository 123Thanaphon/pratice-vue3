<script setup lang="ts">
    import { onMounted, ref, computed } from 'vue';
    import { useRoute } from 'vue-router'
    import { storeToRefs } from 'pinia';
    import { usePostsList } from '../stores/posts';
    import { useAuthorsList } from '../stores/authors';
    import dayjs from 'dayjs';

    const route = useRoute();
    const postId = route.params.postId;

    const postsStore = usePostsList();
    const authorsStore = useAuthorsList();

    const { authors } = storeToRefs(authorsStore);
    const { posts, postById } = storeToRefs(postsStore);

    const { fetchAuthors, setAuthorsList } = authorsStore;
    const { fetchPostList, setPostsList, setPostById } = postsStore;
    const getAuthorById = ref('');

    onMounted(async () => {
        const getPosts = async () => {
            const authorsData = await fetchAuthors();
            setAuthorsList(authorsData);

            const postsData = await fetchPostList();
            await setPostsList(postsData);
        }

        const getAuthor = async () => {
            const findPost = posts.value.find(post => post.id == postId);
            setPostById(findPost);

            getAuthorById.value = authors.value.find(author => author.id == findPost.author_id);
        };

        await getPosts();
        await getAuthor();
    });
</script>

<template>
    <div class="container forum-item">
        <div class="title">
            <img :src="getAuthorById.avatar_url" alt="" class="post-by-img">
            <span class="name">{{ getAuthorById.name }}</span>
            <span class="post-at">posted on {{ dayjs(postById.created_at).format("dddd, MMMM D, YYYY, HH:mm") }}</span>
        </div>

        <div class="content-box">
            <img :src="postById.image_url" alt="forum-img" class="forum-img">
            <div class="content-body">
                <span class="content-title">
                    {{ postById.title }}
                </span>
                <p class="content">
                    {{ postById.body }}
                </p>
            </div>
        </div>
    </div>
</template>

<style>
.container {
    width: 70%;
    background-color: #EEEEEE;
}

.forum-item {
    box-shadow: rgb(0 0 0 / 15%) 1px 1px 2px;
    margin-bottom: 16px;
}
.forum-item:nth-child(odd) {
    background-color: #ffffff;
}

.forum-item:nth-child(even) {
    background-color: #CCECFF;
}
.title {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border-bottom: 1px solid #EAEAEA;
}

.post-by-img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
}

.name {
    color: #F57D5E;
    margin-left: 8px;
}

.post-at {
    color: #ABB3BD;
    margin-left: 8px;
}

.content-box {
    display: flex;
    padding: 16px;
}

.content-title {
    font-size: 24px;
    font-weight: 700;
}

.forum-img {
    width: 180px;
    height: auto;
    margin-right: 16px;
}
</style>