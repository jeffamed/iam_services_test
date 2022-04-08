<template>
  <div id="addModal" tabindex="-1" aria-hidden="true" v-if="modal" class="overflow-y-auto overflow-x-hidden fixed top-0 bottom-0 right-0 left-0 z-50 w-full h-full">
    <div class="relative p-4 max-w-2xl h-full m-auto">
      <div class="relative bg-white rounded-lg shadow">
        <div class="flex justify-between items-start p-5 rounded-t border-b">
          <h3 class="text-xl font-semibold text-gray-900">New {{ title }}</h3>
          <button type="button" class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-2" @click="closeModal">X</button>
        </div>
        <div class="flex">
          <input type="text" placeholder="name" class="border border-black my-5 mx-5 p-3 h-10 w-5/12" v-model="form.name">
          <input v-if="email" type="email" placeholder="email" class="border border-black my-5 mx-5 p-3 h-10 w-5/12" v-model="txtEmail">
          <input type="text" placeholder="text" class="border border-black my-5 mx-5 p-3 h-10 w-5/12" v-model="form.text">
        </div>
        <div class="flex items-center justify-end p-6 rounded-b border-t border-gray-200">
          <button type="button" class="text-white bg-green-700 hover:bg-green-800 h-10 py-2 px-5 text-md text-white rounded font-bold" @click="saveData()">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, ref} from "vue";

export default {
  name: "Modal",
  props:{
    modal:{
      type: Boolean,
      default: false,
      required: true
    },
    title:{
      type: String,
      default: '',
      required: true
    },
    email:{
      type: Boolean,
      default: false,
    }
  },
  setup(props, context){
    const form = reactive({
      name: '',
      text: '',
    })
    const txtEmail = ref('');

    const closeModal = () => {
      context.emit('close');
      clearForm();
    }

    const saveData = () => {
      if (props.title === 'Post')
        form.email = txtEmail.value

      context.emit('save', form);
      clearForm();
    }

    const clearForm = () => {
      form.name = '';
      form.text = '';
      txtEmail.value = '';
    }
    return { closeModal, saveData, form, txtEmail };
  }
}
</script>

<style scoped>

</style>
