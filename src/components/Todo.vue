<template>
  <div>
    <div class="flex justify-between">
      <input type="text" placeholder="Search" class="border border-black m-5 p-3 h-10 w-4/12" v-model="search">
      <button class="bg-sky-600 hover:bg-sky-700 h-10 py-2 px-4 my-5 text-md text-white rounded font-bold" @click="modal = true">Add New</button>
    </div>
    <div>
      <table class="w-full table-auto">
        <thead>
        <tr class="border-b border-black">
          <th>ToDo</th>
          <th>Text</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr class="py-5"  v-for="todo in info" :key="todo.id">
          <td class="py-4 border-b">{{ todo.name }}</td>
          <td class="py-4 border-b">{{ todo.text }}</td>
          <td class="py-4 border-b"><button class="text-red-500 hover:text-red-700" @click="remove(todo.id)"><i class="fa fa-trash fa-lg"></i></button></td>
        </tr>
        </tbody>
      </table>
    </div>

    <Modal :modal="modal" title="Todo" @close="modal = false" @save="save"/>
  </div>
</template>

<script>
import Modal from "./Modal";
import {computed, ref} from "vue";
import {useTodo} from "../composables/useTodo";

export default {
  name: "Todo",
  components: {
    Modal
  },
  setup(){
    const modal = ref(false);
    const search = ref('');

    const {getTodos, saveTodo, deleteTodo, todos} = useTodo();

    const info = computed(() => {
      return Object.values(todos.value).filter(item => {
        return item.name.toLowerCase().includes(search.value.toLowerCase());
      })
    })

    const save = (data) => {
      saveTodo(data);
    }

    const remove = (id) => {
      let response = confirm("Esta seguro de eliminar el ToDo?")
      if(response)
        deleteTodo(id);
    }

    getTodos();
    return { modal, save, remove, search, info}
  }
}
</script>

<style scoped>

</style>
