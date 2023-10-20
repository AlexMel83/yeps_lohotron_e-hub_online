<template>
    <div class="create-post-form-container">
        <h1>Add post</h1>
        <input type="text" id="post-text"
        v-model="text" placeholder="write something" @keyup.enter="createPost" />
        <button @click="createPost()" >Published</button>
        <router-link :to="{name: 'MainPage'}" tag="button">Cancel</router-link>
        <router-view />
    </div>
</template>

<script>
import PostsService from '../PostsService';

export default{
    name: 'CreatePostForm',

    data(){
        return{
            text: ''
        }
    },
    methods: {
        createPost(){
            PostsService.insertPost(this.text).then(()=>{
                this.$router.push({name: 'MainPage'});
            })
        }
    }
}
</script>