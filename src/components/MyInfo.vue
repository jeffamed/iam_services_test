<template>
  <form onsubmit="">
    <div class="my-5 mx-3 text-left">
      <label class="block">Name</label>
      <input type="text" class="border border-gray-400 my-2 p-3 rounded h-10 w-8/12">
    </div>
    <div class="my-5 mx-3 text-left">
      <label class="block">Email</label>
      <input type="email" class="border border-gray-400 my-2 p-3 rounded h-10 w-8/12">
    </div>
    <div class="my-5 mx-3 text-left">
      <label class="block">Password</label>
      <input type="password" class="border border-gray-400 my-2 p-3 rounded h-10 w-8/12">
    </div>
    <div class="my-5 mx-3 text-left">
      <label class="block">Bio</label>
      <textarea rows="5" class="border border-gray-400 my-2 p-3 rounded h-10 w-8/12"></textarea>
    </div>
  </form>
</template>

<script>
export default {
  name: "MyInfo"
}
</script>

<style scoped>

</style>
