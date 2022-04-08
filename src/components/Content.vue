<template>
  <div class="border mx-60 mt-20 py-10">
    <ul class="flex">
      <li class="py-1 rounded-tl-lg rounded-tr-lg px-10 text-md" :class="{ active : tab === 'todo'}" @click="tab = 'todo'"><a href="#">TODO</a></li>
      <li class="py-1 rounded-tl-lg rounded-tr-lg px-10 text-md" :class="{ active : tab === 'post'}" @click="tab = 'post'"><a href="#">POST</a></li>
      <li class="py-1 rounded-tl-lg rounded-tr-lg px-10 text-md" :class="{ active : tab === 'my_info'}" @click="tab = 'my_info'"><a href="#">My Info</a></li>
    </ul>
    <div v-show="tab === 'todo'">
      <Todo />
    </div>
    <div v-show="tab === 'post'">
      <Post />
    </div>
    <div v-show="tab === 'my_info'">
      <MyInfo />
    </div>
  </div>

</template>

<script>
import {ref} from "vue";
import Post from "./Post";
import Todo from "./Todo";
import MyInfo from "./MyInfo";

export default {
  name: "Content",
  components:{
    MyInfo,
    Post,
    Todo,
  },
  setup(){
    const tab = ref('todo');

    return { tab };
  }
}
</script>

<style scoped>
  .active {
    background-color: rgb(156 163 175);
    color: rgb(255 255 255);
    font-weight: bold;
  }
</style>
