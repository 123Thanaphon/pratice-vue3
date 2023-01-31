<template>
    <div class="forum-item">
        <div class="title">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" class="post-by-img">
            <span class="name">Jason Bourne</span>
            <span class="post-at">posted on 2013-07-07T07:51:42Z</span>
        </div>
        <div class="content-box">
            <img src="https://picsum.photos/id/1/320/240" alt="" class="forum-img">
            <div class="content-body">
                <span class="content-title">
                    Let's see this awesome post!
                </span>
                <p class="content">
                    I'm really glad to see this forums popular!
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