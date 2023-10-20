import axios from 'axios'

const url = 'http://localhost:4040/api/posts/';

class PostsService{
    static getPosts(){
        return axios.get(url).then((res)=>{
            const data = res.data;

            return data.map(post=>({
                ...post, createdAt: new Date(post.createdAt)
            }));
        });
    }

    static getPostById(id){
        return axios.get(`${url}${id}`);
    }

    static insertPost(text){
        return axios.post(url, {text});
    }

    static updatePost(id, text){
        return axios.post(`${url}${id}`, {text});
    }

    static deletePost(id){
        return axios.delete(`${url}${id}`);
    }
}

export default PostsService;