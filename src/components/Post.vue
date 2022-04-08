<template>
  <div class="flex justify-between">
    <Input placeholder="Search"/>
    <button class="bg-sky-500 hover:bg-sky-700 h-10 py-2 px-4 my-5 text-md text-white rounded font-bold" @click="modal = true">Add New</button>
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
      <tr class="py-5">
        <td class="py-4 border-b">Pull on the trash</td>
        <td class="py-4 border-b">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, molestias!</td>
        <td class="py-4 border-b">example22_post@emial.com</td>
        <td class="py-4 border-b"><button class="text-red-500 hover:text-red-700"><i class="fa fa-trash fa-lg"></i></button></td>
      </tr>
      </tbody>
    </table>
  </div>

  <Modal :modal="modal" title="Post" email="true" @close="modal = false"/>
</template>

<script>
import Input from "./Input";
import {ref} from "vue";
import Modal from "./Modal";

export default {
  name: "Post",
  components: {
    Modal,
    Input
  },
  setup(){
    const modal = ref(false);

    return {modal}
  }
}
</script>

<style scoped>

</style>
