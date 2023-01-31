<template>
    <div>
        <div class="title">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" class="post-by-img">
            <span class="name">Jason Bourne</span>
            <span class="post-at">posted on 2013-07-07T07:51:42Z</span>
        </div>

    </div>
</template>

<style scoped>
.title {
    display: flex;
    align-items: center;
    padding-bottom: 8px;
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
</style>