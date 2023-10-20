<template>
    <div class="posts-list-container">
        <h1>All posts</h1>
        <div class="posts-list">
            <p class="error" v-if="error">{{ error }}</p>
            <div class="post"
            v-for="(post, index) in posts"
            :item="post"
            :index="index"
            :key="post._id">
                <p class="date">{{ `${post.createdAt.toLocaleString()}` }}</p>
                <p class="text">{{ post.text }}</p>
                <button @click="deletePost(post._id)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
    import PostsService from "../PostsService";

    export default{
        name: 'PostsList',
        data(){
            return {
                posts:[],
                error:''
            };
        },

        methods:{
            async deletePost(id){
                await PostsService.deletePost(id);
                this.posts = await PostsService.getPosts();
            }
        },

        async created(){
            try{
                this.posts = await PostsService.getPosts();
            } catch(e){
                this.error = e.message;
            }
        }
    }
</script>

<style scoped>
.post-list{
    max-height: 307px;
    overflow-y: auto;
}
.post{
    background-color: #41b883;
    padding: 5px 20px 10px 20px;
    margin-top: 10px;
    border: 2px solid #2c3e58;
    text-align: right;
}
</style>