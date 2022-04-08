<template>
  <div>
    <div class="flex justify-between">
      <Input placeholder="Search"/>
      <button class="bg-sky-500 hover:bg-sky-700 h-10 py-2 px-4 my-5 text-md text-white rounded font-bold" @click="modal = true">Add New</button>
    </div>
    <div>
      <table class="w-full table-auto">
        <thead>
        <tr class="border-b border-black">
          <th>Todo</th>
          <th>Text</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr class="py-5">
          <td class="py-4 border-b">Pull on the trash</td>
          <td class="py-4 border-b">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, molestias!</td>
          <td class="py-4 border-b"><button class="text-red-500 hover:text-red-700"><i class="fa fa-trash fa-lg"></i></button></td>
        </tr>
        </tbody>
      </table>
    </div>

    <Modal :modal="modal" title="Todo" @close="modal = false"/>
  </div>
</template>

<script>
import Input from "./Input";
import Modal from "./Modal";
import {ref} from "vue";

export default {
  name: "Todo",
  components: {
    Input,
    Modal
  },
  setup(){
    const modal = ref(false);

    return { modal }
  }
}
</script>

<style scoped>

</style>
