import {ref} from "vue";
import axios from "axios";

export function usePosts() {
    const posts = ref('');

    const getPosts = async () => {
        let response = await axios.get("https://62503098e3e5d24b341d4f7c.mockapi.io/api/v1/posts");
        posts.value = response.data;
    }

    const savePost = async(data) => {
        await axios.post("https://62503098e3e5d24b341d4f7c.mockapi.io/api/v1/posts", data);
        getPosts();
    }

    const deletePost = async(id) => {
        await axios.delete(`https://62503098e3e5d24b341d4f7c.mockapi.io/api/v1/posts/${id}`);
        getPosts();
    }

    return { getPosts, posts, savePost, deletePost }
}
