<template>
  <div class="flex justify-between">
    <input type="text" placeholder="Search" class="border border-black m-5 p-3 h-10 w-4/12" v-model="search">
    <button class="bg-sky-600 hover:bg-sky-700 h-10 py-2 px-4 my-5 text-md text-white rounded font-bold" @click="modal = true">Add New</button>
  </div>
  <div>
    <table class="w-full table-auto">
      <thead>
      <tr class="border-b border-black">
        <th>Post</th>
        <th>Text</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr class="py-5" v-for="post in info" :key="post.id">
        <td class="py-4 border-b" >{{ post.name }}</td>
        <td class="py-4 border-b">{{ post.text }}</td>
        <td class="py-4 border-b">{{ post.email }}</td>
        <td class="py-4 border-b"><button class="text-red-500 hover:text-red-700" @click="remove(post.id)"><i class="fa fa-trash fa-lg"></i></button></td>
      </tr>
      </tbody>
    </table>
  </div>

  <Modal :modal="modal" title="Post" email="true" @close="modal=false" @save="save"/>
</template>

<script>
import Modal from "./Modal";
import {computed, ref} from "vue";
import { usePosts } from "../composables/usePosts";

export default {
  name: "Post",
  components: {
    Modal
  },
  setup(){
    const modal = ref(false);
    const search = ref('');
    const {getPosts, savePost, deletePost, posts} = usePosts();

    const info = computed(() => {
      return Object.values(posts.value).filter(item => {
          return item.name.toLowerCase().includes(search.value.toLowerCase());
      })
    })

    const remove = (id) => {
      let response = confirm("Esta seguro de eliminar el post?")
      if(response)
        deletePost(id);
    }

    const save = (data) => {
      savePost(data);
    }

    getPosts();
    return {modal, save, remove, search, info}
  }
}
</script>

<style scoped>

</style>
