<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue';
import { useAuthorsList } from '../stores/authors';
import dayjs from 'dayjs';

const authorsStore = useAuthorsList();
const { getOwnPost } = authorsStore

const props = defineProps({
    post: {
        type: Object,
        required: true
    },
    authors: {
        type: Object,
        required: true
    }
});

</script>
<template>
    <div class="forum-item">
        <div class="title">
            <img :src="getOwnPost(props.post.author_id)?.avatar_url" alt="" class="post-by-img">
            <span class="name">{{ getOwnPost(props.post.author_id)?.name }}</span>
            <span class="post-at">posted on {{ dayjs(props.post.created_at).format("dddd, MMMM D, YYYY, HH:mm") }}</span>
        </div>

        <div class="content-box">
            <img :src="props.post.image_url" alt="forum-img" class="forum-img">
            <div class="content-body">
                <span class="content-title">
                    {{ props.post.title }}
                </span>
                <p class="content">
                    {{ props.post.body }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
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