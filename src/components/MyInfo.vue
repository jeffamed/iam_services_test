<template>
  <form @submit.prevent="update">
    <div class="my-5 mx-3 text-left">
      <label class="block">Name</label>
      <input type="text" class="border border-gray-400 my-2 p-3 rounded h-10 w-8/12" v-model="user.name">
    </div>
    <div class="my-5 mx-3 text-left">
      <label class="block">Email</label>
      <input type="email" class="border border-gray-400 my-2 p-3 rounded h-10 w-8/12" v-model="user.email">
    </div>
    <div class="my-5 mx-3 text-left">
      <label class="block">Password</label>
      <input type="password" class="border border-gray-400 my-2 p-3 rounded h-10 w-8/12" v-model="user.password">
    </div>
    <div class="my-5 mx-3 text-left">
      <label class="block">Bio</label>
      <textarea rows="10" class="border border-gray-400 my-2 p-3 rounded h-20 w-8/12" v-model="user.biography"></textarea>
    </div>
    <button type="submit" class="bg-amber-500 hover:bg-amber-700 h-10 py-2 px-4 my-5 text-md text-white rounded font-bold">Actualizar</button>
  </form>
  <span v-show="alert" class="bg-green-100 border border-green-300 block font-bold mx-auto py-1 rounded text-green-600 w-11/12">info was saved successfully</span>
</template>

<script>
import {useUser} from "../composables/useUser";
import {ref} from "vue";

export default {
  name: "MyInfo",
  setup(){
    const alert = ref(false);
    const {getUser, updateUser, user} = useUser();

    const update = () => {
      updateUser(user.value).finally( () => {
        alert.value = true;
        setTimeout(() => {
          alert.value = false
        }, 3000)
      })
    }

    getUser(1);
    return {user, update, alert}
  }
}
</script>

<style scoped>

</style>
