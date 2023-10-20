<template>
  <div class="home">
    <PostList />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import PostList from '@/components/PostList.vue';

export default {
  name: 'MainPage',
  components: {
    HelloWorld, PostList
  }
}
</script>
