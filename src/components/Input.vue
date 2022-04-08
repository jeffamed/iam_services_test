<template>
  <input type="text" :placeholder="placeholder" class="border border-black my-5 mx-5 p-3 h-10 w-4/12">
</template>

<script>
export default {
  name: "Input",
  props: {
    placeholder: {
      type: String,
      default: ''
    },
  }
}
</script>

<style scoped>

</style>
